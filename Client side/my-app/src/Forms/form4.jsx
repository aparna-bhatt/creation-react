// 
import React from "react";
import "./form5.css";
import { Link } from "react-router-dom";
import Modal from "../Preview-2/Preview-modal";
//import { useState } from "react";
import Axios from "axios";
Axios.defaults.withCredentials = true;

class Form4 extends React.Component {
  state = {
    data: [{ job: "", desc: "" ,startdate:"",enddate:""}],
    type:"",
    isOpen:false,
    src:this.props.old_data.form1.templateid==='1' ? "./template1.jpeg":(this.props.old_data.form1.templateid==='2' ? "./template2.jpeg":"./template3.png")
  };

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add = (e) => {
    e.preventDefault();
        this.props.form4handler(this.state.data);
        console.log(this.props);
        this.props.history.push("/form5");
        console.log(this.state);
  };

  navClick = (e) => {
  
    console.log(this.state);
    this.props.form4handler(this.state);
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



  onFocus = () => {

    this.setState({
      type: 'date'
    });
  }



  onBlur = () => {

    this.setState({
      type: 'text'
    });
  }

  render() {
    return (
      <div className="form5-main-cont">
         <Modal isOpen={this.state.isOpen} setIsOpen={this.modalHandler}  Data={{form1: this.props.old_data.form1,
        form2: this.props.old_data.form2,
        form3: this.props.old_data.form3,
        form4: this.state.data}}/>
        <div className="form5-left">
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
          <h1 className="form5-left-logo">creation</h1>
          </Link>
        </div>
        <div className="form5-right">
          <div className="form5-right-header-container">
            <Link to="/form1" className="navi" style={{marginRight:"19px"}} onClick={()=>this.navClick("form1")} >
              <i
                class="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Template
            </Link>
            <Link
              to="/form2"
              style={{ textDecoration: "none",marginRight:"19px"}}
              className="navi"
              onClick={()=>this.navClick("form2")}
            >
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Contact Details
            </Link>
            <Link to="/form3" className="navi" style={{marginRight:"19px"}} onClick={()=>this.navClick("form3")}>
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Education
            </Link>
            <Link to="/form4" className="navi" style={{ color: "red",marginRight:"19px" }} onClick={()=>this.navClick("form4")}>
              <i
                className="far fa-arrow-alt-circle-right"
                style={{ marginRight: "2px" }}
              ></i>
              Work history
            </Link>
            <Link to="/form5" className="navi" style={{marginRight:"19px"}} onClick={()=>this.navClick("form5")}>
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
                <p className="tittletext-5">Tell about your Work Experience.</p>
                <p className="subtittletext-5">
                  Relevent Experience is highly valued in every field.
                </p>
              </div>
              <div>
                {this.state.data.map((element, index) => {
                  return (
                    <div>
                      <div className="row">
                        <input
                          type="text"
                          id={`${index}job`}
                          value={this.state.data[index].job}
                          required
                          placeholder="JOB TITLE"
                          className="cont1"
                          style={{ width: "60%" }}
                          onChange={(e) => {
                            this.state.data[index].job = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}
                        />
                      </div>
                      <div className="row">
                        <textarea
                          value={this.state.data[index].desc}
                          name="DESCRIPTION"
                          id={("desc", `${index}jobdesc`)}
                          cols="20"
                          rows="7"
                          placeholder="JOB DESCRIPTION"
                          className="cont2"
                          onChange={(e) => {
                            this.state.data[index].desc = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}
                        ></textarea>
                        <div class="row">
                       <input type={this.state.type} id={("startdate", `${index}startdate`)} required placeholder="START DATE" class="cont1 col"onChange={(e) => {
                            this.state.data[index].startdate = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}onFocus={this.onFocus}  onBlur={this.onBlur} />
                         <input type={this.state.type}   id={("enddate", `${index}enddate`)} required placeholder="END DATE" class="cont1 col" onChange={(e) => {
                            this.state.data[index].enddate = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }} onFocus={this.onFocus}  onBlur={this.onBlur} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                <button
                  onClick={() => {
                    this.state.data.push({ job: "", desc: "",startdate:"",enddate:"" });
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
                {/* <button
                  onClick={(e) => {
                   this.state.data.filter((ele)=>{
                     console.log(ele );
                   })
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
            
                </button> */}
              </div>
            </form>
          </div>

          <div className="container">
            <div className="row" style={{ width: "75%" }}>
              <div className="wrapper">
                <button className="fancy1" type="submit" onClick={this.add}>
                  <span>NEXT</span>
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

export default Form4;