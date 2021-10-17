import React from "react";
import Navbar2 from "../FormsNavbar/navbar2";
import "./style2.css";
import { Link } from "react-router-dom";


class Form4 extends React.Component {

state={
  job:"",
  employer:"",
  references:"",
  city:"",
  State:"",
  enddate:"",
  startdate:"",

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
        <Navbar2 />
        <div className="verticalStrip">

        </div>

        <div className="formcont">
          <form action="#">
            <div className="row tittlebar">
              <p className="tittletext">Tell about your Work Experience.</p>
              <p className="subtittletext">Relevant Experience is higly valued in every field.</p>

            </div>
            <div className="row">
              <input type="text" required placeholder="JOB TITLE" value={this.state.job} className="cont1 col"  onChange={(e) => this.setState({ job: e.target.value })}   />
              <input type="text" required placeholder="EMPLOYER NAME" value={this.state.employer} className="cont1 col"  onChange={(e) => this.setState({ employer: e.target.value })}  />
            </div>
            <div className="row">
              <input type="text" required placeholder="REFERENCES"value={this.state.references} className="cont1 col"  onChange={(e) => this.setState({ references: e.target.value })}  />
            </div>
            <div className="row">
              <input type="text" required placeholder="CITY"value={this.state.city} className="cont1 col"  onChange={(e) => this.setState({ city: e.target.value })}  />
              <input type="text" required placeholder="STATE"value={this.state.State} className="cont1 col"  onChange={(e) => this.setState({ State: e.target.value })}  />


            </div>
            <div className="row">
              <input type="date" required placeholder="START DATE"value={this.state.startdate} className="cont1 col"  onChange={(e) => this.setState({startdate: e.target.value })}  />
              <input type="date" required placeholder="END DATE"value={this.state.enddate} className="cont1 col"  onChange={(e) => this.setState({ enddate: e.target.value })}  />
            </div>
            <div className="container">
              <div className="row" style={{ width: "75%" }}>
                <div className="wrapper">
                  <Link to="/form5"  style={{textDecoration:"none"}}>
                    <button className="fancy" onClick={this.add}>NEXT</button>
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
    );
  }
}


export default Form4;