import React from "react";
import "./navbar2.css";

function Navbar2()
{
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: "0"}}>
      <div className="container-fluid" style={{backgroundColor: "white", padding: "0"}}>
        <a
          className="navbar-brand"
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: "2.5rem",
            paddingLeft: "7rem",
            paddingRight: "3.02rem",

            backgroundColor: "#6ad5ef"}}
          >creation</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a  className="navi" style={{color: "red"}}><i class="far fa-arrow-alt-circle-right" style={{marginRight: "2px"}} className="navbar-selected navbar-form1"></i>Template</a>
            </li>
            <li className="nav-item">
              <a  className="navi"><i className="far fa-arrow-alt-circle-right" style={{marginRight: "2px"}} className="navbar-form2"></i>Contact Details</a>
            </li>
            <li class="nav-item">
              <a  className="navi"><i className="far fa-arrow-alt-circle-right" style={{marginRight: "2px"}}className="navbar-form3" ></i>Education</a>
            </li>
            <li class="nav-item">
              <a  className="navi"><i className="far fa-arrow-alt-circle-right" style={{marginRight: "2px"}} className="navbar-form4"></i>Work history</a>
            </li>
            <li class="nav-item">
              <a  className="navi"><i className="far fa-arrow-alt-circle-right" style={{marginRight: "2px"}} className="navbar-form5"></i>Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </>
    );
}


export default Navbar2;