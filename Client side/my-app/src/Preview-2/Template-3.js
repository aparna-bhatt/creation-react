import React from 'react';
import "../Preview/template2.css";
import { useEffect, useState } from 'react';



const  Template_3 = (props) => {

    const [form1, setform1] = useState(props.data.Data.form1);
    const [form2, setform2] = useState(props.data.Data.form2);
    const [form3, setform3] = useState(props.data.Data.form3);
    const [form4, setform4] = useState(props.data.Data.form4);
    const [form5, setform5] = useState(props.data.Data.form5);
    // const { resume_id } = useParams();
    console.log(props.data.Data.form1);
    console.log(props.data.Data.form2);
    console.log(form1);


const Work=({form4})=>{

    return(
        <>

        {form4.map((ele)=>{
            return(
                <div className="work-item">

                <div className="date">{(ele.startdate!==undefined&&ele.startdate!=="")&&ele.startdate.slice(0,10)}</div>
                <div style={{paddingRight:"13px"}}> to   </div>
                <div className="date">    {(ele.enddate!==undefined&&ele.enddate!=="")&&ele.enddate.slice(0,10)}  </div>
                
                <div className="content">
                    <div className="dot"></div>
                    <div className="name">{ele.job!==undefined&&ele.job}</div>
                    <div className="desc">{ele.desc!==undefined&&ele.desc}</div>
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
                        <div className="name" style={{fontWeight:"900"}}>{ele.skill}</div>
                        <div className="rate">
                            {ele.desc}
                        </div>
                    </div>
            )

        })}
        </>
    )
}


    return (
        <>
           <div className="cv-main-wrapper">
        <div className="cv-main-content">
            <div className="user-top">
               
                <div className="userinfo">
                    <div className="top">
                        <div className="name">
                            <span className="featured"> {form2.firstname!==undefined&&form2.firstname}  {form2.lastname!==undefined&&form2.lastname}</span>
                            
                        </div>
                        {/* <div className="post">DESIGN & FONTEND DEVELOPER</div> */}
                    </div>
                    <div className="info">
                        <div className="li">
                            <span className="-ap icon-phone5 icon"></span>
                            {form2.phone!=undefined&&form2.phone}
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
            <div className="box">
                    {(form4 !== undefined && form4.length > 0&&form4[0].job!=="") &&<div className="main-title">Work Experience </div>}
                    {(form4!==undefined&&form4.length>0&&form4[0].job!=="")&&<Work form4={form4}/>}
             
            </div>
            <div className="box">
                <div className="main-title">
                    {/* <span className="icon -ap icon-school"></span> */}
                    <h3>EDUCATION</h3>
                </div>
                <div className="work-item">
                    <div className="date" style={{marginLeft:"35px"}}>{(form3.startdate!==undefined && form3.startdate!=="")&&form3.startdate.slice(0,10)}  </div>
                    <div style={{marginRight:"13px"}}> to </div>
                    <div className="date"> {(form3.graduation!==undefined&&form3.graduation!=="")&&form3.graduation.slice(0,10)}</div>
                    <div className="content">
                        <div className="dot"></div>
                        <div className="name">{form3.institute_name!==undefined && form3.institute} {form3.institute!=undefined && form3.institute}</div>
                        <div className="company">{form3.degree!==undefined && form3.degree}</div>
                        <div className="desc">{form3.field!==undefined && form3.field}</div>
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
           
                <div className="main-title">{(form5 !== undefined && form5.length > 0&&form5[0].skill!="") &&<div className="box">Skills</div> }

               
                {(form5 !== undefined && form5.length > 0&&form5[0].skill!="") && <div className="list-personal-skill"> <Skills form5={form5} /></div>}
                
            </div>
            </div>
        </div>
        {/* </div> */}
       
    {/* </div> */}


        </>
    )
   
}

export default Template_3;
