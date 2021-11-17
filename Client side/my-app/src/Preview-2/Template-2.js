import React from 'react'
// import Axios from "axios";
// import { useParams } from 'react-router';
import "../Preview/template3.css";
import { useEffect, useState } from 'react';

const Template2 = (props) => {
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


    const Work = ({ form4 }) => {

       return(
           <>
           {form4.map((ele)=>{

                return(
                    <li>
                    <div class="T3-list-item row">
                        <h2 class="T3-exp-title col">{ele.job}</h2>
                        <h2 class="T3-date col">{(ele.startdate!==undefined&&ele.startdate!=="")&&ele.startdate.slice(0,10)} to {(ele.enddate!==undefined&&ele.end_date!=="")&&ele.enddate.slice(0,10)} </h2>
                        {/* <h3 class="T3-exp-loc">Punjabi Bagh ,Delhi</h3> */}

                        <p class="T3-exp-content">
                        {ele.desc}
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
                        {ele.skill}
                    </h3>
                    <p class="T3-skillDesc">
                        {ele.desc}
                    </p>
                </li>
                 )
            })}
            </>
        )
     }
 

    return (
        <>
                 {/* <div class="T3-main"> */}
                   {/* <div class="T3-main-left"> */}
                       {/* <h1 class="T3-left-logo">creation</h1> */}
                       {/* <button className="fancy1-template1 wrapper-template1" onClick={() => Downloader()}><span>DOWNLOAD PDF</span></button> */}
                       {/* </div>   */}
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
                            {form2.phone !== undefined && form2.phone}
                        </p>
                        <p class="T3-content">
                            <i class="fas fa-address-card T3-ico"></i>
                            {form2.address !== undefined && form2.address} {form2.pincode !== undefined && form2.pincode}
                        </p>

                        <h1 class="T3-subtittle"> Skills <hr class="T3-subtitle-line2 " /></h1>
                        <ul>
                        {(form5!==undefined &&form5.length>0&&form5[0].skill!=="")&&<Skills form5={form5} />} 
                        </ul>
                    </div>

                    <div class="T3-header">
                        <h1 class="T3-title">
                            {form2.firstname !== undefined && form2.firstname}  {form2.lastname !== undefined && form2.lastname}
                            <hr class="T3-title-line" />
                        </h1>
                        <h1 class="T3-subtittle2">
                            About Me
                            <hr class="T3-subtitle-line3" />
                        </h1>
                        <div class="T3-about">
                            {form2.about !== undefined && form2.about}
                        </div>
                     <h1 class="T3-subtittle2">
                            Experience
                            <hr class="T3-subtitle-line3" />
                        </h1>
                        
                       
                        <ul class="T3-list">
                           
                        {(form4 !== undefined && form4.length > 0 && form4[0].job !== "") && <Work form4={form4} />}
                        </ul>
                        {(form3!==undefined)&&<> <h1 class="T3-subtittle2">
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
                            <div class="col">{form3.institute !== undefined && form3.institute}</div>
                            <div class="col">{form3.location !== undefined && form3.location}</div>
                            <div class="col">{form3.field != undefined && form3.field}</div>
                            <div class="col">{(form3.startdate !== undefined && form3.startdate !== "") && form3.startdate.slice(0, 10)}</div>
                            <div class="col">{(form3.graduation !== undefined && form3.graduation !== "") && form3.graduation.slice(0, 10)}</div>
                        </div>

</>}
                        {/* <h1 class="T3-subtittle2">
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
                            <div class="col">{(form3.graduation_date !== undefined && form3.graduation_date !== "") && form3.graduation_date.slice(0, 10)}</div>
                        </div> */}



                    </div>



                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Template2;