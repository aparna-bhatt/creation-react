import React from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';
import { Router, useParams } from 'react-router';
import "./template1.css";
import { useEffect, useState } from 'react';

const Template1 = () => {

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
        // const canvas = await html2canvas(document.body.querySelector(".T1")); 
        // const link = document.createElement("a");
        // link.setAttribute("download", "resume.jpg");
        // link.setAttribute("href", canvas.toDataURL("image/jpg"));
        // link.click();
        window.print();
    };


    const Skills = ({ form5 }) => {
        return (
            <>
                {form5.map((ele) => {
                    const { skill_name, skill_desc } = ele;
                    return (
                       
                            <div className="row">
                                <div className="col ">
                                    <div className="T1-skillName">{skill_name} </div>
                                    <div className="T1-skillDesc">{skill_desc}</div>
                                </div>
                            </div>
                    )
                })}
            </>
        )
    }


    const Work = ({ form4 }) => {
        return (
            <>

                {form4.map((ele) => {
                    return (
                        <li>
                            <div className="row" >
                                <div className="col">
                                    <div className="T1-skillName"> {ele.job_title} </div>
                                    <div className="T1-skillDesc">{ele.job_desc}</div>
                                </div>

                                <div className="col" >
                                    <div className="T1-skillDate">
                                        Duration :
                                        <div className="T1-skillStart">{(ele.start_date!==undefined&&ele.start_date!=="")&&ele.start_date.slice(0,10)}</div>
                                        <div className="T1-skillStart" >   to   </div>
                                        <div className="T1-skillStart">{(ele.end_date!==undefined&&ele.end_date!=="")&&ele.end_date.slice(0,10)}</div>
                                    </div>

                                </div>
                            </div>
                        </li>
                    )
                })}
            </>
        )
    }


    return (
        <>
        <div className="T1-main">
            <div className="T1-left">
                <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
             <h1 className="T1-left-logo">creation</h1>
             </Link>
             <button className="fancy1-template1 wrapper-template1" onClick={() => Downloader()}><span>DOWNLOAD PDF</span></button>
            </div>
            <div className="T1">
                <div className="T1-header">
                    <h1 className="T1-name">{form2.first_name!==undefined && form2.first_name}  {form2.last_name!==undefined && form2.last_name}</h1>
                    <h1 className="T1-resume">| Resume</h1>
                    <p className="T1-about">
                        {form2.about!==undefined && form2.about}
                    </p>
                    <hr className="T1-line" />
                    <div className="T1-contact">
                        <div className="T1-detail">
                            Email :  { form2.email!==undefined && form2.email}
                        </div>
                        <div className="T1-detail">
                            Phone :   {form2.phone_no!==undefined && form2.phone_no}
                        </div>
                        <div className="T1-detail">
                            Address : {form2.address!==undefined && form2.address} {form2.pincode!==undefined && form2.pincode}
                        </div>
                    </div>
                    <hr className="T1-line" />
                </div>
                <div className="T1-content">
                    <h1 className="T1-title">
                      {(form3!==undefined&&form3.length>0&&form3.degree!=="")&& "Education"} 
                    </h1>
                    <hr className="T1-line" />
                    <div className="T1-education">
                        <div className="row">
                            <div className="col T1-tableHead">Program</div>
                            <div className="col T1-tableHead">Institute</div>
                            <div className="col T1-tableHead">Location</div>
                            <div className="col T1-tableHead">Specialization</div>
                            <div className="col T1-tableHead">Start Date</div>
                            <div className="col T1-tableHead">Graduation Date</div>
                        </div>
                        <div className="row">
                            <div className="col T1-tableData">{form3.degree!==undefined && form3.degree}</div>
                            <div className="col T1-tableData">{form3.institute_name!==undefined && form3.institute_name}</div>
                            <div className="col T1-tableData">{form3.institute_location!==undefined && form3.institute_location}</div>
                            <div className="col T1-tableData">{form3.specialization!==undefined && form3.specialization}</div>
                            <div className="col T1-tableData">{(form3.start_date!=="NULL" && form3.start_date!==undefined && form3.start_date!=="")&&form3.start_date.slice(0,10)}</div>
                            <div className="col T1-tableData">{(form3.graduation_date!=="NULL" &&form3.graduation_date!==undefined&&form3.graduation_date!=="")&&form3.graduation_date.slice(0,10)}</div>
                        </div>
                    </div>
                   
                        {(form5 !== undefined && form5.length > 0&&form5[0].skill_name!=="") &&
                        <div>
                        <hr className="T1-line" />
                         <h1 className="T1-title">
                             Skills
                        </h1>
                        <div className="T1-skills">
                        {(form5 !== undefined && form5.length > 0) &&<div > <Skills form5={form5} /> </div>}
                            </div>

                        </div>}
                
                    
                        {(form4 !== undefined && form4.length > 0&&form4[0].job_title!="") &&
                        <div> 
                        <hr className="T1-line" />
                        <h1 className="T1-title">
                            Work Experience
                            </h1>
                            </div>}
                
                            {(form4 !== undefined && form4.length > 0&&form4[0].job_title!="") &&
                             <div className="T1-Work">
                        <ul ><Work form4={form4} />
                        </ul>

                    </div>
                        }
                       
                    <hr className="T1-line" />

                </div>

            </div>
           
            </div>

        </>
    )
}

export default Template1;



