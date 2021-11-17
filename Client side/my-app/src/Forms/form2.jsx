
import React from "react";
import { Link } from "react-router-dom";
import "./form2.css";
import Modal from "../Preview-2/Preview-modal";

class Form2 extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    about: "",
    address: "",
    pincode: "",
    email: "",
    phone: "",
    isOpen: false,
    src: this.props.old_data.form1.templateid === "1" ? "./template1.jpeg" : (this.props.old_data.form1.templateid === "2" ? "./template2.jpeg" : "./template3.png")
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
  navClick = (e) => {

    console.log(this.state);
    if (this.state.firstname !== "" && this.state.lastname !== "" && this.state.about !== "" && this.state.address !== "" && this.state.pincode !== "" && this.state.phone !== "") {
      this.props.form2handler(this.state);
      console.log(this.props);
      console.log(e)
      this.props.history.push(e);
    }
    else {
      alert("please fill the essential details")
    }
  }

  clickHandler = () => {
    this.setState({ isOpen: true });
  }

  modalHandler = () => {
    this.setState({ isOpen: false });
  }


  render() {

    return (
      <>
        <Modal isOpen={this.state.isOpen} setIsOpen={this.modalHandler} Data={{
          form1: this.props.old_data.form1,
          form2: this.state,
          form3: this.props.old_data.form3,
          form4: this.props.old_data.form4
        }} />
        <div className="form2-main-cont">
          <div className="form2-left">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h1 className="form2-left-logo">creation</h1>
            </Link>
          </div>
          <div className="form2-right">
            <div className="form2-right-header-container">
              <div style={{ marginRight: "20px" }} onClick={() => this.navClick("form1")} className="navi" >
                <i
                  class="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Template
              </div>
              <div

                style={{ textDecoration: "none" }}
                className="navi"
                style={{ marginRight: "20px", color: "red" }}
                onClick={() => this.navClick("form2")}
              >
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Contact Details
              </div>
              <div className="navi" style={{ marginRight: "20px" }} onClick={() => this.navClick("form3")}>
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}

                ></i>
                Education
              </div>
              <div className="navi" style={{ marginRight: "20px" }} onClick={() => this.navClick("form4")} >
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Work history
              </div>
              <div className="navi" style={{ marginRight: "20px" }} onClick={() => this.navClick("form5")}>
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Skills
              </div>
            </div>
            <div className="formcont-2">
              <form action="#" method="POST" onSubmit={this.add}>
                <div className="row tittlebar-form2">
                  <p className="tittletext-form2">Give some basic contact details.</p>
                  <p className="subtittletext-form2">This is how employers could reach out to you!</p>

                </div>
                <div className="row">
                  <input type="text" value={this.state.firstname} required placeholder="FIRST NAME" className="cont1 col" onChange={(e) => this.setState({ firstname: e.target.value })} />
                  <input type="text" value={this.state.lastname} required placeholder="LAST NAME" className="cont1 col" onChange={(e) => this.setState({ lastname: e.target.value })} />
                </div>
                <div class="row">
                  <input type="text" value={this.state.about} required placeholder="ABOUT" className="cont1 col" onChange={(e) => this.setState({ about: e.target.value })} />
                </div>
                <div class="row">
                  <input type="text" value={this.state.address} required placeholder="ADDRESS" className="cont1 col" onChange={(e) => this.setState({ address: e.target.value })} />

                  {/* <div className="cont1 " style={{ marginTop: "0" }}> */}
                  {/* <div className="row"> */}
                  <input type="text" value={this.state.pincode} required placeholder="PINCODE" className="cont1 col" onChange={(e) => this.setState({ pincode: e.target.value })} />
                  {/* </div> */}
                  {/* </div> */}

                </div>
                <div className="row">
                  <input type="text" value={this.state.phone} required placeholder="PHONE" className="cont1 col" onChange={(e) => this.setState({ phone: e.target.value })} />
                  <input type="email" value={this.state.email} required placeholder="EMAIL ADDRESS" className="cont1 col" onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="container">
                  <div className="row" style={{ width: "75%" }}>
                    <div className="wrapper" style={{ width: "200px" }}>

                      <button className="fancy1" type="submit"  ><span>NEXT</span></button>
                    </div>

                  </div>

                </div>

              </form>
            </div>
            <div className="preview">
              <img src={this.state.src} alt="" className="prvImg" />
              <button href="#" class="btn  prvbtn" onClick={this.clickHandler}>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  style={{ marginRight: "4px" }}
                ></i>
                Preview
              </button>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default Form2;