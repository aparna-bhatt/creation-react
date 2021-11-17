import React from "react";
import "./form3.css";
import { Link } from "react-router-dom";
import Modal from "../Preview-2/Preview-modal";

class Form3 extends React.Component {

  state = {
    institute: "",
    location: "",
    degree: "",
    field: "",
    startdate: "",
    graduation: "",
    type: "",
    isOpen:false,
    src:this.props.old_data.form1.templateid==='1' ? "./template1.jpeg":(this.props.old_data.form1.templateid==='2' ? "./template2.jpeg":"./template3.png")
  }
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.form3handler(this.state);
    console.log(this.props);
    this.props.history.push("/form4");
  }
  navClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.form2handler(this.state);
    console.log(this.props);
    // this.props.history.push("/form3");
  }


  onFocus = () => {

    this.setState({
      type: 'date'
    });
  }

  navClick = (e) => {
  
    console.log(this.state);
    if(this.state.institute!==""&&this.state.location!==""&&this.state.degree!==""&&this.state.field!==""&&this.state.graduation!==""&&this.state.startdate!=="")
    {
    this.props.form3handler(this.state);
    console.log(this.props);
    console.log(e)
    this.props.history.push(e);
    }
    else{
      alert("please fill the essential details")
;    }
  }

  onBlur = () => {

    this.setState({
      type: 'text'
    });
  }

  clickHandler=()=>{
    this.setState({isOpen:true});
  }

  modalHandler=()=>{
    this.setState({isOpen:false});
  }



  render() {
    return (
      <>
        <Modal isOpen={this.state.isOpen} setIsOpen={this.modalHandler}  Data={{form1: this.props.old_data.form1,
        form2: this.props.old_data.form2,
        form3: this.state,
        form4: this.props.old_data.form4}}/>

        <div className="form3-main-cont">
          <div className="form3-left">
            <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <h1 className="form3-left-logo">creation</h1>
            </Link>
          </div>
          <div className="form3-right">
            <div className="form3-right-header-container">
              <div className="navi" style={{ marginRight: "19px" }} onClick={()=>this.navClick("form1")} >
                <i
                  class="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Template
              </div>
              <div
               
                style={{ textDecoration: "none" }}
                className="navi" style={{ marginRight: "19px" }}
                onClick={()=>this.navClick("form2")}
              >
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Contact Details
              </div>
              <div  className="navi" style={{ marginRight: "19px", color: "red" }} onClick={()=>this.navClick("form3")}>
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Education
              </div>
              <div className="navi" style={{ marginRight: "19px" }} onClick={()=>this.navClick("form4")} >
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Work history
              </div>
              <div className="navi" style={{ marginRight: "19px" }} onClick={()=>this.navClick("form5")}>
                <i
                  className="far fa-arrow-alt-circle-right"
                  style={{ marginRight: "2px" }}
                ></i>
                Skills
              </div>
            </div>


            <div className="formcont-form3">
              <form action="#" onSubmit={this.add} method="POST">
                <div className="row tittlebar-form3">
                  <p className="tittletext-form3">Detail your educational qualifications.</p>
                  <p className="subtittletext-form3">This may help you get noticed faster.</p>

                </div>
                <div className="row">
                  <input type="text" required placeholder="INSTITUTE NAME" value={this.state.institute} className="cont1 col" onChange={(e) => this.setState({ institute: e.target.value })} />
                  <input type="text" required placeholder="INSTITUTE LOCATION" value={this.state.location} className="cont1 col" onChange={(e) => this.setState({ location: e.target.value })} />
                </div>
                <div className="row">
                  <input type="text" required placeholder="DEGREE/SPECIALISATION" value={this.state.degree} className="cont1 col" onChange={(e) => this.setState({ degree: e.target.value })} />
                </div>
                <div className="row">
                  <input type="text" required placeholder="FIELD OF STUDY" value={this.state.field} className="cont1 col" onChange={(e) => this.setState({ field: e.target.value })} />


                </div>

                {/* <div className="col cont1" style={{marginTop: "0"}}> */}
                <div className="row">
                  <input type={this.state.type} onFocus={this.onFocus}
                    onBlur={this.onBlur} required placeholder="START DATE" value={this.state.startdate} className="cont1 col"  name={"date"} onChange={(e) => this.setState({ startdate: e.target.value })} />
                  <input type={this.state.type} onFocus={this.onFocus} onBlur={this.onBlur} required placeholder="GRADUATION" value={this.state.graduation} className="cont1 col" onChange={(e) => this.setState({ graduation: e.target.value })} />
                </div>
                {/* </div> */}
                <div className="container">
                  <div className="row" style={{ width: "75%" }}>
                    <div className="wrapper">
                    
                        <button className="fancy1" type="submit" ><span>NEXT</span></button>
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
    );
  }
}
export default Form3;