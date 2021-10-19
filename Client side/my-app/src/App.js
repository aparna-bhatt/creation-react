import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/home";
import Form1 from "./Forms/form1";
import Form2 from "./Forms/form2";
import Form3 from "./Forms/form3";
import Form4 from "./Forms/form4";
import Form5 from "./Forms/form5";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cookieconsent from "./components/cookie_consent";
import Template1 from "./Preview/template1";
import Template2 from "./Preview/template2";
import Template3 from "./Preview/tepmplate3";
import Axios from "axios";
Axios.defaults.withCredentials = true;

function App() {

  useEffect(() => {
    Axios.get("http://localhost:5000/isAuth").then((res) => {
      console.log(res.data);
      sessionStorage.setItem("auth", res.data);

    });

  }, [])

  const isAuth = () => {
    if (sessionStorage.getItem("auth") === "true") {
      return true;
    }
    else {
      return false;
    }
  }
  const [personal, setpersonal] = useState([]);
  const [education, seteducation] = useState([]);
  const [work, setwork] = useState([]);
  const [templateid, settemplateid] = useState([]);
  const form2handler = (personal) => {
    console.log(personal)
    setpersonal(personal);
  }
  const form3handler = (education) => {

    seteducation(education);
    console.log(education)
  }
  const form4handler = (work) => {
    setwork(work);
    console.log(work)
  }
  const form1handler = (templateid) => {
    settemplateid(templateid);
    console.log(templateid)
  }
  //   //<Route
  //   exact
  //   path="/ide/:question_id"
  //   render={() => (isAuth() ? <Ide /> : <Redirect to="/login" />)}
  // />
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form1" exact render={(props) => (isAuth() ? <Form1 {...props} form1handler={form1handler} /> : <Redirect to="/login" />)} />
          <Route path="/form2" exact render={(props) => (isAuth() ? <Form2 {...props} form2handler={form2handler} /> : <Redirect to="/login" />)} />
          <Route path="/form3" exact render={(props) => (isAuth() ? <Form3 {...props} form3handler={form3handler} /> : <Redirect to="/login" />)} />
          <Route path="/form4" exact render={(props) => (isAuth() ? <Form4 {...props} form4handler={form4handler} /> : <Redirect to="/login" />)} />
          <Route path="/form5" render={(props) => (isAuth() ? <Form5 {...props} old_data={{ form1: templateid, form2: personal, form3: education, form4: work }} /> : <Redirect to="/login" />)} />
          <Route path="/login" render={(props) => (<Login {...props} />)} />
          <Route path="/signup" render={(props) => (<Signup {...props} />)} />
          <Route path="/template1/:resmue_id" exact component={Template1} />
          <Route path="/template2/:resume_id" exact component={Template2} />
          <Route path="/template3/:resume_id" exact component={Template3} />

        </Switch>
      </Router>
      <Cookieconsent />
    </>
  );
}

export default App;
