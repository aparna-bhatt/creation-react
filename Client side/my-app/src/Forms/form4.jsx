import React from "react";
import { Link } from "react-router-dom";
import "./form4.css";


class Form4 extends React.Component {

  state = {
    jobtitle: "",
    jobdesc: "",
    enddate: "",
    startdate: "",
    data: [{}]
  }



  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.form4handler(this.state);
    console.log(this.props);
    this.props.history.push("/form5");
  }


  render() {
    return (
      <>
        <div className="form4-main-cont">
          <div className="form4-left">
            <h1 className="form4-left-logo">creation</h1>
          </div>
          <div className="form4-right">
            <div className="form4-right-header-container">
              <Link to="/form1" className="navi" style={{ color: "red" }}><i class="far fa-arrow-alt-circle-right" style={{ marginRight: "2px", color: "red" }}></i>Template</Link>
              <Link to="/form2" style={{ textDecoration: "none" }} className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Contact Details</Link>
              <Link to="/form3" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }} ></i>Education</Link>
              <Link to="/form4" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Work history</Link>
              <Link to="/form5" className="navi"><i className="far fa-arrow-alt-circle-right" style={{ marginRight: "2px" }}></i>Skills</Link>
            </div>
            <div className="formcont-4" >
              <form >
                <div className="row tittlebar-4">
                  <p className="tittletext-4">Describe your skills.</p>
                  <p className="subtittletext-4">It is important to rate your level of proficency honestly.</p>
                </div>
                <div>
                  {this.state.data.map((ele) => {
                    return (
                      <div>
                        <div className="row">
                          <input type="text" value={this.state.jobtitle} required placeholder="JOB TITLE" className="cont1" style={{ width: "60%" }} onChange={(e) => { this.setState({ jobtitle: e.target.value }) }} />
                          {/* <button className="btn btn-outline-dark" style={{width: "3rem", height: "2rem",lineHeight:" 10px",marginLeft:"23.5rem",marginTop: "2rem",color:" red",border: "2px solid red"}}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button> */}
                        </div>
                        <div className="row">
                          <textarea value={this.state.jobdesc} name="DESCRIPTION" id="desc" cols="20" rows="7" placeholder="SKILL DESCRIPTION" className="cont2" onChange={(e) => { this.setState({ jobdesc: e.target.value }) }}></textarea>
                        </div>

                        <div className="row">
                          <input type="date" required placeholder="START DATE" className="cont1 col" />
                          <input type="date" required placeholder="END DATE" className="cont1 col" />
                        </div>
                      </div>
                    )
                  })}

                </div>


                <div className="row">
                  <button onClick={() => { this.setState({ data: [...this.state.data, {}] }); console.log(this.state.data); }} className="btn btn-outline-dark" style={{ width: "3rem", height: "2rem", lineHeight: "10px", marginLeft: "2.5rem", marginTop: "2rem", color: " #6ad5ef", border: "2px solid #6ad5ef" }}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>

              </form>
            </div>

            <div className="container">
              <div className="row" style={{ width: "75%" }}>
                <div className="wrapper">
                  <button className="fancy1" type="submit" onClick={this.add}><span>FINISH</span></button>
                </div>
              </div>
            </div>
            <div className="preview">
              <img src="template3.png" alt="" className="prvImg" />
              <a href="#" class="btn  prvbtn">
                <i className="fa fa-eye" aria-hidden="true" style={{ marginRight: "4px" }}></i>
                Preview
              </a>
            </div>
          </div>


        </div>


      </>
    );
  }
}


export default Form4;