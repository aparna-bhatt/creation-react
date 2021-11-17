import React from 'react'
import Axios from "axios";
import { useParams } from 'react-router';
import "./template3.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const  Template3 = () => {

    const [form1, setform1] = useState([]);
    const [form2, setform2] = useState([]);
    const [form3, setform3] = useState([]);
    const [form4, setform4] = useState([]);
    const [form5, setform5] = useState([]);
    const { resume_id } = useParams();


    useEffect(() => {

        console.log(resume_id);
        Axios.get(`http://localhost:8000/template/${resume_id}`).then((res) => {
            console.log(res.data);
            if (res.data === false) {
                console.log(res);
            }
            else {
                setform1(res.data.form1);
                setform2(res.data.form2);
                console.log(res.data.form2.address);
                setform3(res.data.form3);
                setform4(res.data.form4);
                setform5(res.data.form5);
                console.log(res.data);
                console.log(res.data.form4[0].start_date);
            }

        })

    }, [])



    const Downloader = async () => {
        window.print();
    };



const Work=({form4})=>{

    return(
        <>

        {form4.map((ele)=>{
            return(
                <div className="work-item">

                <div className="date"style={{width:"117px"}}>{(ele.start_date!==undefined&&ele.start_date!=="")&&ele.start_date.slice(0,10)}</div>
                <div style={{paddingRight:"13px"}}> to   </div>
                <div className="date" style={{width:"117px"}}>    {(ele.end_date!==undefined&&ele.end_date!=="")&&ele.end_date.slice(0,10)}  </div>
                
                <div className="content">
                    <div className="dot"></div>
                    <div className="name">{ele.job_title!=undefined&&ele.job_title}</div>
                    <div className="desc">{ele.job_desc!=undefined&&ele.job_desc}</div>
                </div>
            </div> 
            )
        })}
        </>
    )
}


const Skills=({form5})=>{
    return(
        <>

        {form5.map((ele)=>{

            return(
                <div className="item">
                        <div className="name" style={{fontWeight:"900"}}>{ele.skill_name}</div>
                        <div className="rate">
                            {ele.skill_desc}
                        </div>
                    </div>
            )

        })}
        </>
    )
}


    return (
        <>
        <div className="template3-main">
            <div className="template3-left">
                <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
               <h1 className="template3-left-logo" style={{marginLeft:"30px"}}>creation</h1>
               </Link>
               <button className="fancy1-template1 wrapper-template1" onClick={() => Downloader()}><span>DOWNLOAD PDF</span></button>
            </div>
        
           <div className="cv-main-wrapper">
        <div className="cv-main-content">
            <div className="user-top">
               
                <div className="userinfo">
                    <div className="top">
                        <div className="name">
                            <span className="featured"> {form2.first_name!==undefined&&form2.first_name}  {form2.last_name!==undefined&&form2.last_name}</span>
                            
                        </div>
                        {/* <div className="post">DESIGN & FONTEND DEVELOPER</div> */}
                    </div>
                    <div className="info">
                        <div className="li">
                            <span className="-ap icon-phone5 icon"></span>
                            {form2.phone_no!=undefined&&form2.phone_no}
                        </div>
                        <div className="li">
                            <span className="-ap  icon-mail icon"></span>
                            {form2.email!=undefined&&form2.email}
                        </div>
                        <div className="li">
                            <span className="-ap icon-place icon"></span>
                            {form2.address!=undefined&&form2.address}
                        </div>
                    </div>
                </div>
            </div>
            <div className="box" style={{marginLeft:"35px"}}>
                    {(form4 !== undefined && form4.length > 0&&form4[0].job_title!=="") &&<div className="main-title" style={{marginLeft:"32px"}}><h3 style={{fontWeight:"bold"}}>Work Experience</h3> </div>}
                    {(form4!==undefined&&form4.length>0&&form4[0].job_title!=="")&&<Work form4={form4}/>}
             
            </div>
            <div className="box">
                <div className="main-title">
                    {/* <span className="icon -ap icon-school"></span> */}
                    <h3 style={{fontWeight:"bold"}}>Education</h3>
                </div>
                <div className="work-item">
                    <div className="date" style={{marginLeft:"35px",width:"117px"}}>{(form3.start_date!==undefined && form3.start_date!=="")&&form3.start_date.slice(0,10)}  </div>
                    <div style={{marginRight:"13px"}}> to </div>
                    <div className="date"  style={{marginLeft:"35px",width:"117px"}}> {(form3.graduation_date!==undefined&&form3.graduation_date!=="")&&form3.graduation_date.slice(0,10)}</div>
                    <div className="content" style={{paddingLeft:"0px"}}>
                        <div className="name">{form3.institute_name!==undefined && form3.institute_name} {form3.institute_location!=undefined && form3.institute_location}</div>
                        <div className="company">{form3.degree!==undefined && form3.degree}</div>
                        <div className="desc">{form3.specialization!==undefined && form3.specialization}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cv-main-sidebar">
            <div className="box">
                <div className="quote -ap  icon-quotes-left">
                    
                </div>
                <div className="desc">{form2.about!==undefined && form2.about}</div>
            </div>
            <br /><br /><br /><br /><br />
           
                <div className="main-title">{(form5 !== undefined && form5.length > 0&&form5[0].skill_name!="") &&<div className="box">Skills</div> }

               
                {(form5 !== undefined && form5.length > 0&&form5[0].skill_name!="") && <div className="list-personal-skill"> <Skills form5={form5} /></div>}
                
            </div>
            </div>
        </div>
        </div>
       
    {/* </div> */}


        </>
    )
   
}

export default Template3;
