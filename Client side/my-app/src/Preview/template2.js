import React from 'react'
import Axios from "axios";
import { useParams } from 'react-router';
import "./template2.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Template2 = () => {
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

    const Work = ({ form4 }) => {

       return(
           <>
           {form4.map((ele)=>{

                return(
                    <li>
                    <div class="T3-list-item row">
                        <h2 class="T3-exp-title col">{ele.job_title}</h2>
                        <h2 class="T3-date col">{(ele.start_date!==undefined&&ele.start_date!=="")&&ele.start_date.slice(0,10)} to {(ele.end_date!==undefined&&ele.end_date!=="")&&ele.end_date.slice(0,10)} </h2>
                        {/* <h3 class="T3-exp-loc">Punjabi Bagh ,Delhi</h3> */}

                        <p class="T3-exp-content">
                        {ele.job_desc}
                        </p>
                    </div>
                </li>
                )
           })}
           </>
       )
    }



    const Skills = ({ form5 }) => {

        return(
            <>
            {form5.map((ele)=>{
 
                 return(
                    <li>
                    <h3 class="T3-skillName">
                        {ele.skill_name}
                    </h3>
                    <p class="T3-skillDesc">
                        {ele.skill_desc}
                    </p>
                </li>
                 )
            })}
            </>
        )
     }
 

    return (
        <>
                 <div class="T3-main">
                   <div class="T3-main-left">
                       <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
                       <h1 class="T3-left-logo">creation</h1>
                       </Link>
                       <button className="fancy1-template1 wrapper-template1" onClick={() => Downloader()}><span>DOWNLOAD PDF</span></button>
                       </div>  
              <div class="T3-container">
                <div class="T3">
                    <div class="T3-left">
                        <h1 class="T3-subtittle">
                            Contact
                            <hr class="T3-subtitle-line" />
                        </h1>
                        <p class="T3-content">
                            <i class="fas fa-envelope T3-ico"></i>
                            {form2.email !== undefined && form2.email}
                        </p>
                        <p class="T3-content">
                            <i class="fas fa-mobile-alt T3-ico"></i>
                            {form2.phone_no !== undefined && form2.phone_no}
                        </p>
                        <p class="T3-content">
                            <i class="fas fa-address-card T3-ico"></i>
                            {form2.address !== undefined && form2.address} {form2.pincode !== undefined && form2.pincode}
                        </p>

                        {(form5!==undefined &&form5.length>0&&form5[0].skill_name!=="")&&<h1 class="T3-subtittle"> Skills <hr class="T3-subtitle-line2 " /></h1>}
                        <ul>
                        {(form5!==undefined &&form5.length>0&&form5[0].skill_name!=="")&&<Skills form5={form5} />} 
                        </ul>
                    </div>

                    <div class="T3-header">
                        <h1 class="T3-title">
                            {form2.first_name !== undefined && form2.first_name}  {form2.last_name !== undefined && form2.last_name}
                            <hr class="T3-title-line" />
                        </h1>
                        <h1 class="T3-subtittle2">
                            About Me
                            <hr class="T3-subtitle-line3" />
                        </h1>
                        <div class="T3-about">
                            {form2.about !== undefined && form2.about}
                        </div>
                        {(form4 !== undefined && form4.length > 0 && form4[0].job_title !== "") && <h1 class="T3-subtittle2">
                            Experience
                            <hr class="T3-subtitle-line3" />
                        </h1>
                        }
                       
                        <ul class="T3-list">
                           
                        {(form4 !== undefined && form4.length > 0 && form4[0].job_title !== "") && <Work form4={form4} />}
                        </ul>
                        <h1 class="T3-subtittle2">
                            Education
                            <hr class="T3-subtitle-line3" />

                        </h1>
                        <div class="row T3-tableLabels">
                            <div class="col ">Program</div>
                            <div class="col ">Institute</div>
                            <div class="col ">Location</div>
                            <div class="col ">Specialization</div>
                            <div class="col ">Start Date</div>
                            <div class="col ">Graduation Date</div>
                        </div>
                        <div class="row T3-tablecontents">
                            <div class="col">{form3.degree !== undefined && form3.degree}</div>
                            <div class="col">{form3.institute_name !== undefined && form3.institute_name}</div>
                            <div class="col">{form3.institute_location !== undefined && form3.institute_location}</div>
                            <div class="col">{form3.specialization != undefined && form3.specialization}</div>
                            <div class="col">{(form3.start_date !== undefined && form3.start_date !== "") && form3.start_date.slice(0, 10)}</div>
                            <div class="col">{(form3.graduation_date != undefined && form3.graduation_date !== "") && form3.graduation_date.slice(0, 10)}</div>
                        </div>



                    </div>



                </div>
            </div>
            </div>
        </>
    )
}

export default Template2;