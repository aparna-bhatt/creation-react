import React from "react";
import {Link} from "react-router-dom";
import "./Signup.css";
import Axios from "axios";

class Signup extends React.Component {
    state={
        username:"",
        password:"",
        email:"",
    }
    submitHandler=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:8000/Signup",{
            data:{
                username:this.state.username,
                password:this.state.password,
                email:this.state.email,
            }
        }).then((res)=>{
            if(res.data===true)
            {
                sessionStorage.setItem("auth",true);
                this.props.history.push("/");
            }
            else{
                this.setState({username:""});
                this.setState({password:""});
                this.setState({email:""});
                alert("Account already exits!");
            }
        })
        console.log(this.state);
    }
    render() {
        return (
            <>
                <div className="main-cont-signup">
                    <div className="left-signup">
                           <Link to="/" style={{textDecoration:"none",color:"black"}}>
                        <h1 className="signup-logo" style={{ marginLeft: "25px" }}>
                            creation
                        </h1>
                        </Link>
                        <div className="container-signup">
                            <div className="wrapper-signup">
                                <Link to="/login" style={{textDecoration:"none"}}>
                                <button className="fancy1-signup" ><span>Login</span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-signup">

                    <div className="formcont-signup">
        <form action="#">
          <div className="row tittlebar-signup" id="create-acc">
            <p className="tittletext-signup">Create Account.</p>
            <p id="sgnuptext">You just need to this once!</p>
          </div>

            <div className="row">
                <input type="text" value={this.state.username} required placeholder="USERNAME" className="cont1-signup col" onChange={(e)=>this.setState({username:e.target.value})} />
            </div>
            <div className="row">
                <input type="email" value={this.state.email} required placeholder="EMAIL ADDRESS" className="cont1-signup col" onChange={(e)=>this.setState({email:e.target.value})} />
            </div>
            <div className="row">
                <input type="password" value={this.state.password} required placeholder="PASSWORD" className="cont1-signup col"  onChange={(e)=>this.setState({password:e.target.value})}/>
            </div>
            <div className="row">
              <button type="submit" className="btn btn-success btnsub" value="submit" type="submit" onClick={this.submitHandler}><span>Create</span></button>
              <button type="reset" className="btn btn-dark btnsub" value="reset"><span>Reset</span></button>
            </div>
        </form>

    </div>

                    </div>

                </div>



            </>

        );
    }
}
export default Signup;