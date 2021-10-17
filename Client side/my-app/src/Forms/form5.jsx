import React from "react";
import Navbar2 from "../FormsNavbar/navbar2";
import "./style2.css";
import { Link } from "react-router-dom";
//import { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
Axios.defaults.withCredentials=true;

class Form5 extends React.Component {

  state={
    form1:{},
    form2:{},
    form3:{},
    form4:{},
    form5:{},
  }

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
 }    

    add = (e) => {
    e.preventDefault();
    console.log(this.state);

    console.log(this.props.old_data,"form5 ke ander log hua");
    Axios.post("http://localhost:5000/form5",{
      data:{
              form1:this.props.old_data.form1,
              form2:this.props.old_data.form2,
              form3:this.props.old_data.form3,
              form4:this.props.old_data.form4
      }
    }).then((res)=>{
      if(res)
      {
        if(this.props.old_data.form1.templateid==="1"){
           this.props.history.push("/template1");
        }
        else if(this.props.old_data.form1.templateid==="2")
        {
          this.props.history.push("/template2");
        }
        else{
          this.props.history.push("/template3");
        }
      }
      else{
        console.log("faliure");
      }
    })
    console.log(this.props);
  }

render(){
  return (
    <>
      <Navbar2 />

      <div className="verticalStrip">

      </div>

      <div className="formcont" >
        <form action="#">
          <div className="row tittlebar">
            <p className="tittletext">Describe your skills.</p>
            <p className="subtittletext">It is important to rate your level of proficency honestly.</p>

          </div>
          <div className="row" style={{ marginRight: "13rem" }}>
            <div className="rate col" >
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
            <input type="text" required placeholder="SKILL" className="cont1 col" />
            <button className="btn btn-outline-dark" style={{ width: "3rem", height: "2rem", lineHeight: "10px", marginLeft: "10rem", marginTop: " 2rem", color: "red", border: "2px solid red" }}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
          <div className="row">
            <button className="btn btn-outline-dark" style={{ width: "3rem", height: "2rem", lineHeight: "10px", marginLeft: "2.5rem", marginTop: "2rem", color: "#6ad5ef", border: "2px solid #6ad5ef" }}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>

          <div className="container">
            <div className="row" style={{ width: "75%" }}>
              <div className="wrapper" style={{ top: "50%" }}>
                <Link to="/form4"  style={{textDecoration:"none"}}>
                  <button className="fancy" ><span>BACK</span></button>
                </Link>
              </div>
              <div className="wrapper">
                <button className="fancy1" type="submit" onClick={this.add}><span>FINISH</span></button>
              </div>
            </div>
          </div>

        </form>
      </div>
      <div className="preview">
        <img src="template3.png" alt="" className="prvImg" />
        <a href="#" class="btn  prvbtn">
          <i className="fa fa-eye" aria-hidden="true" style={{ marginRight: "4px" }}></i>
          Preview
        </a>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

    </>
  );
}
}


export default Form5;