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
let useremail = "";
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
    console.log(req.body.data);
    db.query("SELECT * FROM users WHERE username=? AND password=?", [req.body.data.username, req.body.data.password], (err, result) => {
        if (result.length > 0) {
            console.log(result[0].email);
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
    return res.redirect("/");
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
var resume_id = 5;
app.post("/form5", (req, res) => {
    console.log(req.body.data);
    db.query("INSERT INTO `resumes`(`template_id`, `email`) VALUES (?,?)", [req.body.data.form1.templateid, req.cookies.email]);
    db.query("SELECT resume_id FROM resumes WHERE resume_id=(SELECT max(resume_id) FROM resumes)", (err, res) => {
        if (res.length > 0) {
            console.log(res[0].resume_id);
            resume_id = (res[0].resume_id);
            console.log(resume_id);
            db.query("INSERT INTO `contact`( `resume_id`,`email`,`first_name`,`last_name`,`state`,`city`,`pincode`) VALUES (?,?,?,?,?,?,?)", [resume_id, req.body.data.form2.email, req.body.data.form2.firstname, req.body.data.form2.lastname, req.body.data.form2.State, req.body.data.form2.city, req.body.data.pincode]);
            db.query("INSERT INTO `education`( `resume_id`,`institute_name`, `institute_location`, `degree`, `specialization`, `start_date`, `graduation_date`) VALUES (?,?,?,?,?,?,?)", [resume_id, req.body.data.form3.institue, req.body.data.form3.location, req.body.data.form3.degree, req.body.data.form3.field, req.body.data.form3.startdate, req.body.data.form3.graduation]);
            db.query("INSERT INTO `work`(`resume_id`,`current_job`, `current_employer`, `job_desc`, `job_location`, `start_date`, `end_date`) VALUES (?,?,?,?,?,?,?)", [resume_id, req.body.data.form4.job, req.body.data.form4.employer, req.body.data.form4.references, req.body.data.form4.city, req.body.data.form4.State, req.body.data.form4.endate, req.body.data.form4.graduation]);
        }
        else {
            console.log(err);
        }
    });
    console.log(resume_id);
    res.send(true);
})

app.get("/template:resumeid")

app.listen(process.env.Port || 5000, (req, res) => {
    console.log("server is running at port 5000");
})