import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Home from "./components/Home/home";
import Form1 from "./Forms/form1";
import Form2 from "./Forms/form2";
import Form3 from "./Forms/form3";
import Form4 from "./Forms/form4";
import Form5 from "./Forms/form5";

function App() {
    return(
      <>
      <Router>
    <Switch>
      <Route path="/" exact component ={Home} />
      <Route path="/form1" exact component={Form1} />
      <Route path="/form2"  exact component={Form2} />
      <Route path="/form3" exact component={Form3} />
      <Route path="/form4" exact component={Form4} />
      <Route path="/form5" component={Form5} />
    </Switch>
     </Router>
  </>
    );
}

export default App;
