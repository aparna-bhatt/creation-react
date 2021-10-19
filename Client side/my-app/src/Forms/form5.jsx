// import React from "react";
// import "./form5.css";
// import { Link } from "react-router-dom";
// //import { useState } from "react";
// import Axios from "axios";
// Axios.defaults.withCredentials = true;


// class Form5 extends React.Component {

//   state = {
//     form1: {},
//     form2: {},
//     form3: {},
//     form4: {},
//     skilltitle:"",
//    skilldesc:"",
//    data: [{ skill: "First Skill", desc: "First Desc" }],

//   }
  

//   constructor(props) {
//     super(props);
//     this.add = this.add.bind(this);
//   }



//   add = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     console.log(this.props.old_data, "form5 ke ander log hua");
//     Axios.post("http://localhost:5000/form5", {
//       data: {
//         form1: this.props.old_data.form1,
//         form2: this.props.old_data.form2,
//         form3: this.props.old_data.form3,
//         form4: this.props.old_data.form4,
//         form5:this.state2
//       }
//     }).then((res) => {
//       if (res) {
//         if (this.props.old_data.form1.templateid === "1") {
//           this.props.history.push("/template1");
//         }
//         else if (this.props.old_data.form1.templateid === "2") {
//           this.props.history.push("/template2");
//         }
//         else {
//           this.props.history.push("/template3");
//         }
//       }
//       else {
//         console.log("faliure");
//       }
//     })
//     console.log(this.props);
//   }

//   render() {
//     return (

//       <div className="form5-main-cont">
//         <div className="form5-left">
//           <h1 className="form5-left-logo">creation</h1>
//         </div>
//         <div className="form5-right">
//           <div className="form5-right-header-container">
//             <Link to="/form1" className="navi" style={{ color: "red" }}><i class="far fa-arrow-alt-circle-right" style={{ marginRight: "2px", color: "red" }}></i>Template</Link>
//             <Link to="/form2" style={{ textDecoration: "none" }} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Contact Details</Link>
//             <Link to="/form3" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }} ></i>Education</Link>
//             <Link to="/form4" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Work history</Link>
//             <Link to="/form5" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Skills</Link>
//           </div>
//           <div className="formcont-5" >
//             <form >
//               <div className="row tittlebar-5">
//                 <p className="tittletext-5">Describe your skills.</p>
//                 <p className="subtittletext-5">It is important to rate your level of proficency honestly.</p>
//               </div>
//               <div>
//                 {this.state.data.map((ele) => {
//                   return (
//                     <div>
//                       <div className="row">
//                         <input type="text"  id={`${index}skill`}
//                           value={this.state.data[index].skill}  required placeholder="SKILL" className="cont1" style={{ width: "60%" }} onChange={(e) => { this.setState({ skilltitle: e.target.value }) }} />
//                         {/* <button className="btn btn-outline-dark" style={{width: "3rem", height: "2rem",lineHeight:" 10px",marginLeft:"23.5rem",marginTop: "2rem",color:" red",border: "2px solid red"}}>
//                     <i className="fa fa-trash" aria-hidden="true"></i>
//                 </button> */}
//                       </div>
//                       <div className="row">
//                         <textarea   value={this.state.skilldesc} name="DESCRIPTION" id="desc" cols="20" rows="7" placeholder="SKILL DESCRIPTION" className="cont2" onChange={(e) => { this.setState({ skilldesc: e.target.value }) }}></textarea>
//                       </div>
//                     </div>
//                   )
//                 })}

//               </div>


//               <div className="row">
//                 <button onClick={() => {this.setState({form5skills:[...this.state.form5skills,this.state.skilltitle]});console.log(this.state.form5skills);
//                    this.setState({ data: [...this.state.data, {}] }); console.log(this.state.data);this.setState({skilltitle:""}) }} className="btn btn-outline-dark" style={{ width: "3rem", height: "2rem", lineHeight: "10px", marginLeft: "2.5rem", marginTop: "2rem", color: " #6ad5ef", border: "2px solid #6ad5ef" }}>
//                   <i className="fa fa-plus" aria-hidden="true"></i>
//                 </button>
//               </div>

//             </form>
//           </div>

//           <div className="container">
//             <div className="row" style={{ width: "75%" }}>
//               <div className="wrapper">
//                 <button className="fancy1" type="submit" onClick={this.add}><span>FINISH</span></button>
//               </div>
//             </div>
//           </div>
//           <div className="preview">
//             <img src="template3.png" alt="" className="prvImg" />
//             <a href="#" class="btn  prvbtn">
//               <i className="fa fa-eye" aria-hidden="true" style={{ marginRight: "4px" }}></i>
//               Preview
//             </a>
//           </div>
//         </div>


//       </div>

//     );
//   }
// }


// export default Form5;



import React from "react";
import "./form5.css";
import { Link } from "react-router-dom";
//import { useState } from "react";
import Axios from "axios";
import { useParams } from 'react-router';
Axios.defaults.withCredentials = true;

class Form5 extends React.Component {
  state = {
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5:[{}],
    data: [{ skill: "First Skill", desc: "First Desc" }],
    
  };

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.old_data, "form5 ke ander log hua");
    Axios.post("http://localhost:5000/form5", {
      data: {
        form1: this.props.old_data.form1,
        form2: this.props.old_data.form2,
        form3: this.props.old_data.form3,
        form4: this.props.old_data.form4,
        form5: this.state.data,
      },
    }).then((res) => {
      if (res) {
        console.log(res.data,"form5 birju");
        if (this.props.old_data.form1.templateid === "1") {
          this.props.history.push({pathname:`/template1/${res.data.resume_id}`,state:{detail:res.data.resume_id}});
        } else if (this.props.old_data.form1.templateid === "2") {
          this.props.history.push(`/template2/${res.data.resume_id}`);
        } else {
          this.props.history.push(`/template3/${res.data.resume_id}`);
        }
      } else {
        console.log("faliure");
      }
    });
    console.log(this.props);
  };

  render() {
    return (
      <div className="form5-main-cont">
        <div className="form5-left">
          <h1 className="form5-left-logo">creation</h1>
        </div>
        <div className="form5-right">
          <div className="form5-right-header-container">
            <Link to="/form1" className="navi" style={{ color: "red" }}>
              <i
                class="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px", color: "red" }}
              ></i>
              Template
            </Link>
            <Link
              to="/form2"
              style={{ textDecoration: "none" }}
              className="navi"
            >
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Contact Details
            </Link>
            <Link to="/form3" className="navi">
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Education
            </Link>
            <Link to="/form4" className="navi">
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Work history
            </Link>
            <Link to="/form5" className="navi">
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Skills
            </Link>
          </div>
          <div className="formcont-5">
            <form>
              <div className="row tittlebar-5">
                <p className="tittletext-5">Describe your skills.</p>
                <p className="subtittletext-5">
                  It is important to rate your level of proficency honestly.
                </p>
              </div>
              <div>
                {this.state.data.map((element, index) => {
                  return (
                    <div>
                      <div className="row">
                        <input
                          type="text"
                          id={`${index}skill`}
                          value={this.state.data[index].skill}
                          required
                          placeholder="SKILL"
                          className="cont1"
                          style={{ width: "60%" }}
                          onChange={(e) => {
                            this.state.data[index].skill = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}
                        />
                      </div>
                      <div className="row">
                        <textarea
                          value={this.state.data[index].desc}
                          name="DESCRIPTION"
                          id={("desc", `${index}skilldesc`)}
                          cols="20"
                          rows="7"
                          placeholder="SKILL DESCRIPTION"
                          className="cont2"
                          onChange={(e) => {
                            this.state.data[index].desc = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                <button
                  onClick={() => {
                    this.state.data.push({ skill: "", desc: "" });
                    this.setState([...this.state.data]);
                  }}
                  className="btn btn-outline-dark"
                  style={{
                    width: "3rem",
                    height: "2rem",
                    lineHeight: "10px",
                    marginLeft: "2.5rem",
                    marginTop: "2rem",
                    color: " #6ad5ef",
                    border: "2px solid #6ad5ef",
                  }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="container">
            <div className="row" style={{ width: "75%" }}>
              <div className="wrapper">
                <button className="fancy1" type="submit" onClick={this.add}>
                  <span>FINISH</span>
                </button>
              </div>
            </div>
          </div>
          <div className="preview">
            <img src="template3.png" alt="" className="prvImg" />
            <a href="#" class="btn  prvbtn">
              <i
                className="fa fa-eye"
                aria-hidden="true"
                style={{ marginRight: "4px" }}
              ></i>
              Preview
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Form5;