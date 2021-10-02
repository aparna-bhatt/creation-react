import { ReactDOM } from "react";
import "./style.css";

function Home(){
    return(
        <div className="row topofpage">
        <div className="col verticalStrip">
          <h1 className="headline">Create Your Perfect Resume With CREATION</h1>
          <div className="wrapper">
            <div className="link_wrapper">
              <a className="fancy" href="Form1.html">Generate Resume </a>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                </svg>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col " style={{position: "relative"}}>
          <img className="img1" src="./template2.png" alt="" srcset="" />
          <img className="img2" src="./template4.png" alt="" srcset="" />
          <img className="img3" src="./temaplte3.png" alt="" srcset="" />
        </div>
      </div>
      
    );
}
export default Home;