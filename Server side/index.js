const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors({
    origin: "http://localhost:3000",  //no slash(birju comment);
    credentials: true
}));

app.use(helmet());
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbms_project"
})
db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mysql connected");
    }
})

app.post("/login", (req, res) => {
   // console.log(req.body.data);
    db.query("SELECT * FROM users WHERE username=? AND password=?", [req.body.data.username, req.body.data.password], (err, result) => {
        if (result.length > 0) {
            //console.log(result[0].email);
            res.cookie("email", result[0].email, {
                sameSite: "lax",
                httpOnly: true,
                expires: new Date(new Date().getTime() + 100 * 100000000)
            }).cookie("auth", true, {
                sameSite: "lax",
                httpOnly: true,
                expires: new Date(new Date().getTime() + 100 * 100000000)
            }).send(true);
        }
        else {
            res.send(false);
        }
    })
})

app.post("/signup", (req, res) => {
    db.query("SELECT * FROM users WHERE username=? OR email=?", [req.body.data.username, req.body.data.email], (err, result) => {
        if (result.length > 0) {
            res.send(false);
        }
        else {
            db.query("INSERT INTO `users`(`username`, `email`, `password`) VALUES (?,?,?)", [req.body.data.username, req.body.data.email, req.body.data.password], (err, result) => {
                res.cookie("email", req.body.data.email, {
                    sameSite: "lax",
                    httpOnly: true,
                    expires: new Date(new Date().getTime() + 100 * 1000)
                }).cookie("auth", true, {
                    sameSite: "lax",
                    httpOnly: true,
                    expires: new Date(new Date().getTime() + 100 * 1000)
                }).send(true);

            })

        }
    })
})
app.get("/Logout", (req, res) => {
    res.clearCookie();
})

app.get("/isAuth", (req, res) => {
    console.log(req.cookies);
    if (req.cookies !== undefined && req.cookies.auth === 'true') {
        res.send(true);
    }
    else {
        res.send(false);
    }
})

// app.post("/form1",(req,res)=>{
//     console.log(req.body.data);
//     db.query("INSERT INTO `resumes`(`template_id`, `email`) VALUES (?,?)",[req.body.data.templateid,req.cookies.email],(err,result)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         res.send(true);
//     })

// })
let resume_id = 5;
app.post("/form5", (req, response) => {
   // console.log(req.body.data);
    db.query("INSERT INTO `resumes`(`template_id`, `email`) VALUES (?,?)", [req.body.data.form1.templateid, req.cookies.email]);
    db.query("SELECT resume_id FROM resumes WHERE resume_id=(SELECT max(resume_id) FROM resumes)", (err, res) => {
        if (res.length > 0) {
            resume_id = (res[0].resume_id);
            db.query("INSERT INTO `contact`( `resume_id`,`email`,`about`,`first_name`,`last_name`,`address`,`phone_no`,`pincode`) VALUES (?,?,?,?,?,?,?,?)", [resume_id, req.body.data.form2.email,req.body.data.form2.about, req.body.data.form2.firstname, req.body.data.form2.lastname, req.body.data.form2.address,req.body.data.form2.phone, req.body.data.pincode]);
            for (var i = 0; i < req.body.data.form4.length; i++) {
                db.query("INSERT INTO `work`(`resume_id`, `job_id`, `job_title`, `job_desc`, `start_date`, `end_date`) VALUES (?,?,?,?,?,?)", [resume_id, i + 1, req.body.data.form4[i].job, req.body.data.form4[i].desc, req.body.data.form4[i].startdate, req.body.data.form4[i].enddate])
            }
            for (var i = 0; i < req.body.data.form5.length; i++) {
                db.query("INSERT INTO `skills`(`resume_id`, `skill_id`, `skill_name`, `skill_desc`) VALUES (?,?,?,?)", [resume_id, i + 1, req.body.data.form5[i].skill, req.body.data.form5[i].desc])
            }

            db.query("INSERT INTO `education`( `resume_id`,`institute_name`, `institute_location`, `degree`, `specialization`, `start_date`, `graduation_date`) VALUES (?,?,?,?,?,?,?)", [resume_id, req.body.data.form3.institue, req.body.data.form3.location, req.body.data.form3.degree, req.body.data.form3.field, req.body.data.form3.startdate, req.body.data.form3.graduation]);
            response.send({resume_id:resume_id});
          //  console.log(resume_id);
        }
        else {
            console.log(err);
        }
    });
})


app.get("/template/:resumeid", (req, response) => {

console.log(req.params,"hello");
    db.query("SELECT resume_id FROM resumes WHERE resume_id=?",[req.params.resumeid], (err, res) => {
        if (res.length > 0) {
            var data={}
            db.query("SELECT * FROM contact WHERE resume_id=? ",[req.params.resumeid], (err, res) => {
                if (err) {
                    console.log(err);
                    response.send(false)
                }
                else {
                    data.form2 = res[0];
                    console.log(res[0]);
                    console.log(data.form2);
                }
            });
            db.query("SELECT * FROM resumes WHERE resume_id=? ",[req.params.resumeid] ,(err, res) => {
                if (err) {
                    console.log(err);
                    response.send(false)
                }
                else {
                    data.form1 = res[0].template_id;
                }
            });
            db.query("SELECT * FROM education WHERE resume_id=?",[req.params.resumeid], (err, res) => {
                if (err) {
                    console.log(err);
                    response.send(false)
                }
                else {
                    data.form3=res[0];
                }
            });
            db.query("SELECT * FROM work WHERE resume_id=?",[req.params.resumeid], (err, res) => {
                if (err) {
                    console.log(err);
                    response.send(false)
                }
                else {
                    
                        data.form4=res;
                }
            });
            db.query("SELECT * FROM skills WHERE resume_id=?",[req.params.resumeid], (err, res) => {
                if (err) {
                    console.log(err);
                    response.send(false)
                }
                else {
                    
                        data.form5=res;
                        response.send(data);
                }
            });
           
        }
        else{
            console.log(err);
        }
        
    })
  

})

app.listen(process.env.Port || 5000, (req, res) => {
    console.log("server is running at port 5000");
})