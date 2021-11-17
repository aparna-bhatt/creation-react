
import React from "react";
import "./form5.css";
import { Link } from "react-router-dom";
//import { useState } from "react";
import Axios from "axios";
import { useParams } from 'react-router';
import Modal from "../Preview-2/Preview-modal";
Axios.defaults.withCredentials = true;

class Form5 extends React.Component {
  state = {
    form1: {},
    form2: {},
    form3: {},
    form4: {},
    form5:[{}],
    data: [{ skill: "", desc: "" }],
    isOpen:false,
    // isEdit:false
    src:this.props.old_data.form1.templateid==='1' ? "./template1.jpeg":(this.props.old_data.form1.templateid==='2' ? "./template2.jpeg":"./template3.png")
    
  };

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }
  navClick = (e) => {
  
    console.log(this.state);
    this.props.form5handler(this.state);
    console.log(this.props);
    console.log(e)
    this.props.history.push(e);
  };

  clickHandler=()=>{
    this.setState({isOpen:true});
  }

  modalHandler=()=>{
    this.setState({isOpen:false});
  }

  add = (e) => {
    e.preventDefault();
    // console.log(this.state); 
    this.props.form5handler(this.state.data);
    console.log(this.props.old_data, "form5 ke ander log hua");
   console.log(this.props.old_data.form2);
   console.log(this.props.old_data.form3);
    if(this.props.old_data.form2.length!==0&&this.props.old_data.form3!==0&&this.props.old_data.form1.length!==0)
   { Axios.post("http://localhost:8000/form5", {
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
  }
  else
  {
    alert("please fill the essential information !!")
  }
    console.log(this.props);
  };

  render() {
    return (
      <div className="form5-main-cont">
        <Modal isOpen={this.state.isOpen} setIsOpen={this.modalHandler}  Data={{form1: this.props.old_data.form1,
        form2: this.props.old_data.form2,
        form3: this.props.old_data.form3,
        form4: this.props.old_data.form4,
        form5: this.state.data}}/>
        <div className="form5-left">
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
          <h1 className="form5-left-logo">creation</h1>
          </Link>
        </div>
        <div className="form5-right">
          <div className="form5-right-header-container">
            <Link to="/form1" className="navi" style={{marginRight:"19px"}} >
              <i
                class="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
                onClick={()=>this.navClick("form1")}
              ></i>
              Template
            </Link>
            <Link
              to="/form2"
              style={{ textDecoration: "none" ,marginRight:"19px" }}
              className="navi"
              onClick={()=>this.navClick("form2")}
            >
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Contact Details
            </Link>
            <Link to="/form3" className="navi"  style={{marginRight:"19px"}} onClick={()=>this.navClick("form3")} >
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Education
            </Link>
            <Link to="/form4" className="navi" style={{marginRight:"19px"}} onClick={()=>this.navClick("form4")} >
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Work history
            </Link>
            <Link to="/form5" className="navi" style={{ color: "red",marginRight:"19px" }} onClick={()=>this.navClick("form5")} >
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
            <img src={this.state.src} alt="" className="prvImg" />
            <button href="#" class="btn  prvbtn" onClick={this.clickHandler}>
              <i
                className="fa fa-eye"
                aria-hidden="true"
                style={{ marginRight: "4px" }}
              ></i>
              Preview
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form5;