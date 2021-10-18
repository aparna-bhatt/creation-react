import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import Axios from "axios";
Axios.defaults.withCredentials=true;

class Login extends React.Component {

    state = {
        username: "",
        password: "",
    }

      constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
     }    

    submitHandler = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/Login",{
            data:{
             username:this.state.username,
             password:this.state.password
            }
        }).then((res)=>{
            if(res.data===true){
                sessionStorage.setItem("auth",true);
                this.props.history.push("/");
            }
            else{
                this.setState({username:""});
                this.setState({password:""});
             alert("Invalid Id or Password....");
            }
        });
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div className="main-cont">
                    <div className="left-login">
                        <h1 className="login-logo" style={{ marginLeft: "25px" }}>
                            creation
                        </h1>
                        <div className="buttonplacer-login">
                            <div className="wrapper-login">
                                <Link to="/signup" style={{textDecoration:"none"}}>
                                <button className="fancy1-login"><span>Create Account</span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-login">
                        <div className="formcont-login">
                            <form action="#">
                                <div className="row tittlebar-login" id="create-acc">
                                    <p className="tittletext-login">Welcome Back.</p>
                                    <p className="subtittletext-login" id="log-in">Use your registered Username and Password.</p>
                                </div>

                                <div className="row">
                                    <input type="text" value={this.state.username} required placeholder="USERNAME" className="cont1 col" onChange={(e) => this.setState({ username: e.target.value })} />
                                </div>
                                <div className="row">
                                    <input type="password" value={this.state.password} required placeholder="PASSWORD" className="cont1 col" onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-success btnsub" value="submit" type="submit" onClick={this.submitHandler}><span>Login</span></button>
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

export default Login;