import React  from "react";
import "./style2.css";
import Navbar2 from "../FormsNavbar/navbar2";

function Form1()
{
    return(
        <>  
        <Navbar2 />
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
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        </>
    );
}

export default Form1;