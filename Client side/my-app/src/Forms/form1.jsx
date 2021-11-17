import React from "react";
import "./form1.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import Axios from "axios";
Axios.defaults.withCredentials = true;

class Form1 extends React.Component {
    state = {
        templateid: 0
    }


    // window.onbeforeunload = function () {
    //     return 'Are you really want to perform the action?';
    //    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.templateid!==0)
        {this.props.form1handler(this.state);
        console.log(this.props);
        this.props.history.push("/form2");}
        else
        {
            alert("please choose a template!");
        }
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div className="form-container">
                    <div className="form-left">
                        <Link to="/" style={{textDecoration:"none",color:"black"}}>
                        <h1 className="form-left-logo">creation</h1>
                        </Link>
                    </div>
                    <div className="form-right">
                        <div className="form-right-header-container">
                            <Link className="navi" style={{ color: "red",marginRight:"19px" }}><i class="far fa-arrow-alt-circle-right" style={{ marginRight: "2px", color: "red" }}></i>Template</Link>
                            <Link  to="/form2" style={{ textDecoration: "none",marginRight:"19px" }} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Contact Details</Link>
                            <Link to="/form3" style={{marginRight:"19px"}} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }} ></i>Education</Link>
                            <Link to="/form4" style={{marginRight:"19px"}} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Work history</Link>
                            <Link to="/form5" style={{marginRight:"19px"}} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Skills</Link>
                        </div>
                        <div className="image-container">
                            <div className="first-template">
                                <img id="img1" src="./template1.jpeg" alt="" srcset="" />

                            </div>
                            <div className="second-template">
                                <img id="img2" src="./template2.jpeg" alt="" srcset="" />
                            </div>
                            <div className="third-template">
                                <img id="img3" src="./template3.png" alt="" srcset="" />
                            </div>
                        </div>

                        <form action="#" method="post" >
                            <div className="selection" >
                                <input type="radio" className="first-selection" name="template" value={1} onClick={(e) => { this.setState({ templateid: e.target.value }) }} />

                                <input type="radio" name="template" className="second-selection" value={2} onClick={(e) => { this.setState({ templateid: e.target.value }) }} />
                            
                        
                                <input type="radio" name="template" className="third-selection" value={3} onClick={(e) => { this.setState({ templateid: e.target.value }) }} />
                                </div>
                        
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