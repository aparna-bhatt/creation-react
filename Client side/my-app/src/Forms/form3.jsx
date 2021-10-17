import React from "react";
import Navbar2 from "../FormsNavbar/navbar2";
import "./style2.css";
import {Link} from "react-router-dom";

class Form3 extends React.Component
{

  state={
    institute:"",
    location:"",
    degree:"",
    field:"",
    startdate:"",
    graduation:"",
  }
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
 }    

  add=(e)=>{
    e.preventDefault();
    console.log(this.state);
    this.props.form3handler(this.state);
    console.log(this.props);
    this.props.history.push("/form4");
  }
  render(){
    return (
        <>
        <Navbar2 />
        <div class="verticalStrip">
      
    </div>
        <div className="formcont">
        <form action="#" >
          <div className="row tittlebar">
            <p className="tittletext">Detail your educational qualifications.</p>
            <p className="subtittletext">This may help you get noticed faster.</p>

          </div>
            <div className="row">
                <input type="text" required placeholder="INSTITUTE NAME" value={this.state.institute} className="cont1 col" onChange={(e)=>this.setState({institute:e.target.value})} />
                <input type="text" required placeholder="INSTITUTE LOCATION"value={this.state.location} className="cont1 col"  onChange={(e)=>this.setState({location:e.target.value})} />
            </div>
            <div className="row">
                <input type="text" required placeholder="DEGREE/SPECIALISATION"value={this.state.degree} className="cont1 col"   onChange={(e)=>this.setState({degree:e.target.value})}/>
            </div>
            <div className="row">
              <input type="text" required placeholder="FIELD OF STUDY"value={this.state.field} className="cont1 col"  onChange={(e)=>this.setState({field:e.target.value})} />
                
                <div className="col cont1" style={{marginTop: "0"}}>
                    <div className="row">
                            <input type="date" required placeholder="START DATE" value={this.state.startdate} className="cont2 col" style={{marginLeft: "0"}}  onChange={(e)=>this.setState({startdate:e.target.value})} />
                            <input type="date" required placeholder="GRADUATION" value={this.state.graduation} className="cont2 col"  onChange={(e)=>this.setState({graduation:e.target.value})} />
                    </div>
                </div>
                
            </div>
            <div className="container">
        <div className="row" style={{width: "75%"}}>
            <div className="wrapper">
              <Link to="/form4" style={{textDecoration:"none"}}>
              <button className= "fancy1" onClick={this.add}><span>NEXT</span></button>
              </Link>
            </div>
        </div>
    </div>
        </form>
    </div>
    <div className="preview">
      <img src="template3.png" alt="" className="prvImg" />
      <button className="btn  prvbtn">
        <i className="fa fa-eye" aria-hidden="true" style={{marginRight:"4px"}}></i>
        Preview
      </button>
    </div>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

        </>
    );
  }
}
export default Form3;