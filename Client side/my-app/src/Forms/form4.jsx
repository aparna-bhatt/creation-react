// 
import React from "react";
import "./form5.css";
import { Link } from "react-router-dom";
//import { useState } from "react";
import Axios from "axios";
Axios.defaults.withCredentials = true;

class Form4 extends React.Component {
  state = {
    data: [{ job: "First Job", desc: "First Desc" ,startdate:"0000-00-00",enddate:"0000-00-00"}],
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
                          placeholder="SKILL"
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
                          placeholder="SKILL DESCRIPTION"
                          className="cont2"
                          onChange={(e) => {
                            this.state.data[index].desc = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}
                        ></textarea>
                        <div class="row">
                       <input type="date"  id={("startdate", `${index}startdate`)} required placeholder="START DATE" class="cont1 col"onChange={(e) => {
                            this.state.data[index].startdate = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }} />
                         <input type="date"   id={("enddate", `${index}enddate`)} required placeholder="END DATE" class="cont1 col" onChange={(e) => {
                            this.state.data[index].enddate = e.target.value;
                            this.setState([...this.state.data]);
                            console.log(this.state.data);
                          }}/>
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

export default Form4;