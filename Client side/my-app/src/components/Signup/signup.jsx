import { ReactDOM } from "react";

function Signup()
{
    return(
    <div class="containerform">
      <div class="tab">
        <button class="tablinks" onclick="openTab(event,'SignIn')">
          Sign In
        </button>
        <button class="tablinks" onclick="openTab(event,'SignUp')">
          Sign Up
        </button>
      </div>

      <div id="SignIn" class="text">
        <form action="/" method="POST">
          <div class="data">
            <input type="text" required placeholder="USERNAME" />
          </div>
          <div class="data">
            <input type="password" required placeholder="PASSWORD" />
          </div>
          <div class="forgot-pwd">
            <a href="#"> Forgot Password? </a>
          </div>
          <div class="butn">
            <div class="inner"></div>
            <button type="submit" class="btn shadow loginbtn">login</button>
          </div>
        </form>
      </div>
      <div id="SignUp" class="text">
        <form action="#">
          <div class="data">
            <input type="email" required placeholder="EMAIL" />
          </div>
          <div class="data">
            <input type="text" required placeholder="USERNAME" />
          </div>
          <div class="data">
            <input type="password" required placeholder="PASSWORD" />
          </div>
          <div class="butn">
            <div class="inner"></div>
            <button type="submit" class="btn shadow loginbtn">register</button>
          </div>
        </form>
      </div>
    </div>
    );
}

export default Signup;