import React from "react";
import Navbar2 from "../FormsNavbar/navbar2";
import "./style2.css";

function Form3()
{
    return (
        <>
        <Navbar2 />
        <div class="verticalStrip">
      
    </div>
        <div className="formcont">
        <form action="#">
          <div className="row tittlebar">
            <p className="tittletext">Detail your educational qualifications.</p>
            <p className="subtittletext">This may help you get noticed faster.</p>

          </div>
            <div className="row">
                <input type="text" required placeholder="INSTITUTE NAME" className="cont1 col" />
                <input type="text" required placeholder="INSTITUTE LOCATION" className="cont1 col" />
            </div>
            <div className="row">
                <input type="text" required placeholder="DEGREE/SPECIALISATION" className="cont1 col" />
            </div>
            <div className="row">
              <input type="text" required placeholder="FIELD OF STUDY" className="cont1 col" />
                
                <div className="col cont1" style={{marginTop: "0"}}>
                    <div className="row">
                            <input type="text" required placeholder="START DATE" className="cont2 col" style={{marginLeft: "0"}} />
                            <input type="text" required placeholder="GRADUATION" className="cont2 col" />
                    </div>
                </div>
                
            </div>
        </form>
    </div>
    <div className="preview">
      <img src="template3.png" alt="" className="prvImg" />
      <a href="#" className="btn  prvbtn">
        <i className="fa fa-eye" aria-hidden="true" style={{marginRight:"4px"}}></i>
        Preview
      </a>
    </div>
    <div className="container">
        <div className="row" style={{width: "75%"}}>
          <div className="wrapper" style={{top: "50%"}}>
            <a className= "fancy"href="Form3.html"><span>BACK</span></a>
          </div>
            <div className="wrapper">
              <a className= "fancy1"href="Form4.html"><span>NEXT</span></a>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

        </>
    );
}
export default Form3;