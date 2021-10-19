import React from 'react'
import Axios from "axios";
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import "./template1.css";
import { useEffect,useState } from 'react';

const Template1 = () => {

    const [form1,setform1]=useState([]);
    const [form2,setform2]=useState([]);
    const [form3,setform3]=useState([]);
    const [form4,setform4]=useState([]);
    const [form5,setform5]=useState([]);
    let {resume_id}=useParams();
    const location=useLocation();
    const Education=(props)=>{

      return (
        <>

<div className=" template1-education section">
              <div className="template1-section-head">Education</div>
              <div>
                {props.institute} ,{props.institute_location}
              </div>

              <br/>

              <div>
                {props.degree}
              </div>

              <br />

              <div>
                {props.sepcialization}
              </div>

              <br/>
              <div>
                {props.start_date}
              </div>
              <br/>
              to
              <div>
              <br/>
              {props.graduation_date}
              </div>
            </div>


        
        </>
      )
    }
    useEffect(() => {
      resume_id=location.state;
      console.log(resume_id);
        Axios.get(`http://localhost:5000/template/${resume_id.detail}`).then((res)=>{
          console.log(res.data);
           if(res.data===false)
           {
               console.log(res);
           }
           else{
               setform1(res.data.form1);
               setform2(res.data.form2);
               setform3(res.data.form3);
               setform4(res.data.form4);
               setform5(res.data.form5);
               console.log(res.data);
           }
            
        })
        
    }, [])
    return (
       <>
      <div className="template1-container">
      <div className="template1-main">
        <div className="template1-left">
          <div className="template1-section-container">
            <div className="template1-contact-details">
              <div className="template1-head">
                <h1 className="template1-label">PERSONAL INFO</h1>
              </div>
              <div className="template1-contact">
                <div className="template1-label">ADDRESS</div>
                <div className="template1-value">
                  <div></div>
                </div>
              </div>
              <div className="template1-contact">
                <div className="template1-label">Phone:</div>
                <div className="template1-value">
                  <div>{form2.phone_no}</div>
                </div>
              </div>
              <div className="template1-contact">
                <div className="template1-label">Email:</div>
                <div className="template1-value">
                  <div>{form2.email}</div>
                </div>
              </div>

            <div className="template1-section-container">
              <div className="template1-head">Skills</div>
              <div className="template1-skills">
                {form5.map((ele)=>{
                  const {skill_name,skill_desc}=ele;
                  return (
                    <>
                  <div className="template1-skill">
                  <div className="template1-skill-name">
                    {skill_name}
                  </div>
                  <div>
                   {skill_desc}
                  </div>
                </div>
                </>
                );
                })}
                
              </div>
            </div>
          </div>
        </div>

        
        <div className="right">
          <div className="top">
            <div className="profile-info">
              <div className="name">
                {form2.first_name}  {form2.last_name}
              </div>
            </div>
          </div>

          <div className="template1-content">

            <div className="template1-about-me section">
              <div className="template1-section-head">About Me</div>
              <div className="template1-desc">
               {form2.about}
              </div>
            </div>


           {form3.length>1&&<Education  {...form3}/>}
           

            <div className="template1-experience section">
              <div className="template1-section-head">Work History</div>
              <ol style={{marginLeft: "1rem"}}>
              {form4.map((ele)=>{
                const {job_title,job_desc,start_date,end_date}=form4;
                return(
                  <>
                  <li>
                  <div className="template1-label2">
                    {job_title}
                  </div>
                  <div className="template1-detail1">
                    {job_desc}
                  </div> 
                  <div className="template1-detail3">
                    <div className="template1-detail4">
                      {start_date}
                    </div>
                    to
                    <div className="template1-detail4">
                      {end_date}
                    </div>
                  </div> 
                </li>
                </>
                );
              })}
              </ol>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
       </>
    )
   
}
export default Template1;
