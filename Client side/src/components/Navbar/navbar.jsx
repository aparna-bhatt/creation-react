import React from "react";
import "./style.css";

function Navbar(){

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{overflow:" hidden;padding: 0"}} >
        <div className="container-fluid" style={{backgroundColor: "white", padding: "0"}}>
          <a
            className="navbar-brand"
            href="#"
            style={{fontFamily: "'Lobster', cursive", fontSize: "2.5rem", paddingLeft: "7rem", width: "30%", backgroundColor: "#6ad5ef"}}>creation</a>
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
                <a
                  className=" btnsgnIn"
                  aria-current="page"
                  // onClick="openTabpage(event,'SignIn')"
                >
                  Sign In
              </a>
              </li>
              <li className="nav-item">
                <a
                  className="btnsgnUp"
                  aria-current="page"
                  //onClick={openTabpage}
                >
                  Sign Up
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    );
}

export default Navbar;