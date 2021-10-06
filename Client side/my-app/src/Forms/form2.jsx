import React from "react";
import Navbar2 from "../FormsNavbar/navbar2";
import "./style2.css";

function Form2()
{
    return(
        <>
        <Navbar2 />
        <div class="verticalStrip">
      
    </div>
    
        <div className="formcont">
        <form action="#">
          <div className="row tittlebar">
            <p className="tittletext">Give some basic contact details.</p>
            <p className="subtittletext">This is how employers could reach out to you!</p>

          </div>
            <div className="row">
                <input type="text" required placeholder="FIRST NAME" className="cont1 col" />
                <input type="text" required placeholder="LAST NAME" className="cont1 col" />
            </div>
            <div class="row">
                <input type="text" required placeholder="PROFESSION" className="cont1 col" />
            </div>
            <div class="row">
              <input type="text" required placeholder="CITY" className="cont1 col" />
                
                <div className="col cont1" style={{marginTop: "0"}}>
                    <div className="row">
                            <input type="text" required placeholder="STATE" className="cont2 col" style={{marginLeft: "0"}} />
                            <input type="text" required placeholder="PINCODE" className="cont2 col" />
                    </div>
                </div>
                
            </div>
            <div className="row">
                <input type="text" required placeholder="PHONE" className="cont1 col" />
                <input type="email" required placeholder="EMAIL ADDRESS" className="cont1 col" />
            </div>
        </form>
    </div>
    <div className="preview">
      <img src="./template3.png" alt="" className="prvImg" />
      <a href="#" className="btn  prvbtn">
        <i className="fa fa-eye" aria-hidden="true" style={{marginRight:"4px"}}></i>
        Preview
      </a>
    </div>
    <div className="container">
        <div className="row" style={{width: "75%"}}>
          <div className="wrapper" style={{top: "50%"}}>
            <a className= "fancy"><span>BACK</span></a>
          </div>
            <div className="wrapper">
              <a className= "fancy1"><span>NEXT</span></a>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

        </>
    )
}

export default Form2;