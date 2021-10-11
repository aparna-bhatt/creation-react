import React from "react";
// import "./style.css";
import Navbar from "../Navbar/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="verticalStrip-home" style={{ width: "30%" }}></div>
      <div className="row topofpage-home">
        <div className="col verticalStrip-home">
          <h1 className="headline-home" style={{ fontSize: "2rem" }}>
            Create Your Perfect Resume With CREATION
          </h1>
          <div className="wrapper-home">
            <div className="link_wrapper-home">
              <a className="fancy-home">Generate Resume </a>
              <div className="icon-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{ position: "relative" }}>
          <img className="img1-home" src="./template2.png" alt="" srcset="" />
          <img className="img2-home" src="./template4.png" alt="" srcset="" />
          <img className="img3-home" src="./template3.png" alt="" srcset="" />
        </div>
      </div>
      <div className="containerform-home">
        <div className="tab-home">
          <button className="tablinks-home">Sign In</button>
          <button className="tablinks-home">Sign Up</button>
        </div>

        {/* <div id="SignIn" className="text">
        <form action="/" method="POST">
          <div className="data">
            <input type="text" required placeholder="USERNAME" />
          </div>
          <div className="data">
            <input type="password" required placeholder="PASSWORD" />
          </div>
          <div className="forgot-pwd">
            <a href="#"> Forgot Password? </a>
          </div>
          <div className="butn">
            <div className="inner"></div>
            <button type="submit" className="btn shadow loginbtn">login</button>
          </div>
        </form>
      </div>
      <div id="SignUp" className="text">
        <form action="#">
          <div className="data">
            <input type="email" required placeholder="EMAIL" />
          </div>
          <div className="data">
            <input type="text" required placeholder="USERNAME" />
          </div>
          <div className="data">
            <input type="password" required placeholder="PASSWORD" />
          </div>
          <div className="butn">
            <div className="inner"></div>
            <button type="submit" className="btn shadow loginbtn">register</button>
          </div>
        </form>
      </div> */}
      </div>
    </>
  );
}
export default Home;
