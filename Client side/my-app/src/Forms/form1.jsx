import React from "react";
import "./form1.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
Axios.defaults.withCredentials = true;

class Form1 extends React.Component {
    state = {
        templateid: 0
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.form1handler(this.state);
        console.log(this.props);
        this.props.history.push("/form2");
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div className="form-container">
                    <div className="form-left">
                        <h1 className="form-left-logo">Creation</h1>
                    </div>
                    <div className="form-right">
                        <div className="form-right-header-container">
                            <a href="" className="navi" style={{ color: "red" }}><i class="far fa-arrow-alt-circle-right" style={{ marginRight: "2px", color: "red" }}></i>Template</a>
                            <Link to="/form2" style={{ textDecoration: "none" }} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Contact Details</Link>
                            <Link to="/form3" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }} ></i>Education</Link>
                            <Link to="/form4" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Work history</Link>
                            <Link to="/form5" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Skills</Link>
                        </div>
                        <div className="image-container">
                            <div className="first-template">
                                <img id="img1" src="./template1.png" alt="" srcset="" />

                            </div>
                            <div className="second-template">
                                <img id="img2" src="./template4.png" alt="" srcset="" />
                            </div>
                            <div className="third-template">
                                <img id="img3" src="./template3.png" alt="" srcset="" />
                            </div>
                        </div>

                        <form action="#" method="post" className="selection">
                                <input type="radio" className="first-selection" name="template" value={1} onClick={(e) => { this.setState({ templateid: e.target.value }) }} />

                                <input type="radio" name="template" className="second-selection" value={2} onClick={(e) => { this.setState({ templateid: e.target.value }) }} />
                            
                        
                                <input type="radio" name="template" className="third-selection" value={3} onClick={(e) => { this.setState({ templateid: e.target.value }) }} />
                        
                            <div className="container">
                                <div className="row" style={{ width: "75%" }}>
                                    <div className="wrapper">
                                        <button className="fancy1" type="submit" onClick={this.submitHandler} ><span>NEXT</span></button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

                {/* <Navbar2 />
        <div class="verticalStrip">
      
    </div>
    <div className="container content">
        <div className="d-flex flex-row">
            <div className="col d-flex justify-content-center">
                <img id="img1"  src="./template1.png" alt="" srcset="" />
            </div>
            <div className="col d-flex justify-content-center">
                <img id="img2" src="./template4.png" alt="" srcset="" />
            </div>
            <div className="col d-flex justify-content-center">
                <img id = "img3" src="./template3.png" alt="" srcset="" />
            </div>
        </div>
            <form action="">
                <div className="row">
                    <div className="col d-flex justify-content-center radio" >
                        <input type="radio" name="template" value="template1" />
                    </div>
                    <div className="col d-flex justify-content-center radio">
                        <input type="radio" name="template" value="template2" />
                    </div>
                    <div className="col d-flex justify-content-center radio">
                        <input type="radio" name="template" value="template2" />
                    </div>
                </div>
                <div className="row">
                  <div className="wrapper">
                    <a className= "fancy1"href="Form2.html"><span>NEXT</span></a>
                  </div>
                </div>
            </form>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script> */}
            </>
        );
    }
}

export default Form1;