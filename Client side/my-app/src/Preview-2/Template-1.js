import React from 'react'
// import Axios from "axios";
// import { useParams } from 'react-router';
import "../Preview/template1.css";
import { useEffect, useState } from 'react';

const Template_1 = (props) => {

    const [form1, setform1] = useState(props.data.Data.form1);
    const [form2, setform2] = useState(props.data.Data.form2);
    const [form3, setform3] = useState(props.data.Data.form3);
    const [form4, setform4] = useState(props.data.Data.form4);
    const [form5, setform5] = useState(props.data.Data.form5);
    // const { resume_id } = useParams();
    console.log(props.data.Data.form1);
    console.log(props.data.Data.form2);
    console.log(props.data.Data.form3.length);
    console.log(form3.length);
    // console.log(form1);

// console.log(Data);
    
    const Skills = ({ form5 }) => {
        return (
            <>
                {form5.map((ele) => {
                    const { skill, desc } = ele;
                    return (
                        <div className="T1-skills">
                            <div className="row">
                                <div className="col ">
                                    <div className="T1-skillName">{skill} </div>
                                    <div className="T1-skillDesc">{desc}</div>
                                </div>
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
                            <div className="row" style={{display:"flex"}}>
                                <div className="col" style={{flexBasis:"50%"}}>
                                    <div className="T1-skillName"> {ele.job} </div>
                                    <div className="T1-skillDesc">{ele.desc}</div>
                                </div>

                                <div className="col" style={{flexBasis:"50%"}}>
                                    <div className="T1-skillDate">
                                        Duration :
                                        <div className="T1-skillStart">{(ele.startdate!==undefined&&ele.startdate!=="")&&ele.startdate.slice(0,10)}</div>
                                        <div className="T1-skillStart" >   to   </div>
                                        <div className="T1-skillStart">{(ele.enddate!==undefined&&ele.enddate!=="")&&ele.enddate.slice(0,10)}</div>
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
        {/* <div className="T1-main"> */}
            {/* <div className="T1-left"> */}
             {/* <h1 className="T1-left-logo">creation</h1> */}
             {/* <button className="fancy1-template1 wrapper-template1" onClick={() => Downloader()}><span>DOWNLOAD PDF</span></button> */}
            {/* </div> */}
            <div className="T1">
                <div className="T1-header">
                    <h1 className="T1-name">{form2.firstname!==undefined && form2.firstname}  {form2.lastname!==undefined && form2.lastname}</h1>
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
                            Phone :   {form2.phone!==undefined && form2.phone}
                        </div>
                        <div className="T1-detail">
                            Address : {form2.address!==undefined && form2.address} {form2.pincode!==undefined && form2.pincode}
                        </div>
                    </div>
                    <hr className="T1-line" />
                </div>
                <div className="T1-content">
                  
                    {(form3!==undefined)&& <> <h1 className="T1-title"> Education  </h1><hr className="T1-line" /></>} 
                    <div className="T1-education">
                        <div className="row">
                        {(form3!==undefined&&form3.degree!=="")&&  <div className="col T1-tableHead">Program</div>} 
                        {(form3!==undefined&&form3.institute!=="")&&  <div className="col T1-tableHead">Institute</div>} 
                        {(form3!==undefined&&form3.location!=="")&& <div className="col T1-tableHead">Location</div>} 
                        {(form3!==undefined&&form3.field!=="")&&  <div className="col T1-tableHead">Specialization</div>} 
                        {(form3!==undefined&&form3.startdate!=="")&&  <div className="col T1-tableHead">Start Date</div>} 
                        {(form3!==undefined&&form3.graduation!=="")&& 
                            <div className="col T1-tableHead">Graduation Date</div> } 
                        </div>
                        <div className="row">
                            <div className="col T1-tableData">{form3.degree!==undefined&&form3.degree!=="" && form3.degree}</div>
                            <div className="col T1-tableData">{form3.institute!==undefined &&form3.institute!=="" &&form3.institute}</div>
                            <div className="col T1-tableData">{form3.location!==undefined &&form3.location!=="" &&form3.location}</div>
                            <div className="col T1-tableData">{form3.field!==undefined &&form3.field!=="" &&form3.field}</div>
                            <div className="col T1-tableData">{(form3.startdate!==undefined && form3.startdate!=="")&&form3.startdate.slice(0,10)}</div>
                            <div className="col T1-tableData">{(form3.graduation!==undefined&&form3.graduation!=="")&&form3.graduation.slice(0,10)}</div>
                        </div>
                    </div>
                   
                        {(form5 !== undefined && form5.length > 0&&form5[0].skill!="") &&
                        <div>
                        <hr className="T1-line" />
                         <h1 className="T1-title">
                             Skills
                        </h1>
                        </div>}
                 {(form5 !== undefined && form5.length > 0) &&<div style={{display:"flex"}}> <Skills form5={form5} /> </div>}
                    
                        {(form4 !== undefined && form4.length > 0&&form4[0].job!="") &&
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
           
            {/* </div> */}

        </>
    )
}

export default Template_1;



