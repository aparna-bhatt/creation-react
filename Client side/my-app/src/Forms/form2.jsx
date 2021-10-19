
import React from "react";
import Navbar2 from "../FormsNavbar/navbar2";
import { Link } from "react-router-dom";
import "./style2.css";
import {useEffect} from "react";


  
  

class Form2 extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    about: "",
    address:"",
    pincode: 0,
    email: "",
    phone: "",
  }

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
 }    

    add = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.form2handler(this.state);
    console.log(this.props);
    this.props.history.push("/form3");
  }
  render() {

    return (
      <>
        <Navbar2 />
        <div class="verticalStrip">

        </div>

        <div className="formcont">
          <form  action="#" method="POST">
            <div className="row tittlebar">
              <p className="tittletext">Give some basic contact details.</p>
              <p className="subtittletext">This is how employers could reach out to you!</p>

            </div>
            <div className="row">
              <input type="text" value={this.state.firstname} required placeholder="FIRST NAME" className="cont1 col" onChange={(e) => this.setState({ firstname: e.target.value })} />
              <input type="text" value={this.state.lastname} required placeholder="LAST NAME" className="cont1 col"  onChange={(e) => this.setState({ lastname: e.target.value })}/>
            </div>
            <div class="row">
              <input type="text"  value={this.state.about} required placeholder="ABOUT" className="cont1 col" onChange={(e) => this.setState({ about: e.target.value })} />
            </div>
            <div class="row">
              <input type="text"  value={this.state.address} required placeholder="address" className="cont1 col" onChange={(e) => this.setState({ address: e.target.value })} />

              <div className="col cont1" style={{ marginTop: "0" }}>
                <div className="row">
                  <input type="text"  value={this.state.pincode} required placeholder="PINCODE" className="cont2 col" onChange={(e) => this.setState({ pincode: e.target.value })} />
                </div>
              </div>

            </div>
            <div className="row">
              <input type="text" value={this.state.phone} required placeholder="PHONE" className="cont1 col" onChange={(e) => this.setState({ phone: e.target.value })}/>
              <input type="email" value={this.state.email} required placeholder="EMAIL ADDRESS" className="cont1 col" onChange={(e) => this.setState({ email: e.target.value })} />
            </div>
            <div className="container">
              <div className="row" style={{ width: "75%" }}>
                <div className="wrapper" style={{width:"200px"}}>
                  <Link to="/form3" style={{textDecoration:"none"}}>
                    <button className="fancy1" type="submit"onClick={this.add} ><span>NEXT</span></button>
                  </Link>
                </div>
                
              </div>
             
            </div>
           
          </form>
        </div>
        <div className="preview">
          <img src="./template3.png" alt="" className="prvImg" />
          <a href="#" className="btn  prvbtn">
            <i className="fa fa-eye" aria-hidden="true" style={{ marginRight: "4px" }}></i>
            Preview
          </a>
        </div>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

      </>
    )
  }
}

export default Form2;