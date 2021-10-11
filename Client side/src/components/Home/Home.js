import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-left-logo">Creation</h1>
        <div className="home-left-main-container">
          <h1 className="home-left-heading">
            Create Your Perfect Resume With CREATION
          </h1>
          <div className="home-left-button">
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
        </div>
      </div>
      <div className="home-right">
        <div className="home-right-header-container">
          <div className="home-right-header-signup">Sign Up</div>
          <div className="home-right-header-signin">Sign In</div>
        </div>
        <div className="home-right-body-container">
          <div className="home-image-1-container">
            <img className="home-image-1" src="./template1.png"></img>
          </div>
          <div className="home-image-2-container">
            <img className="home-image-2" src="./template2.png"></img>
          </div>
          <div className="home-image-3-container">
            <img className="home-image-3" src="./template3.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
