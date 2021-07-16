import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import About from "./Pages/About";

function App() {
  const page = window.location.pathname;
  console.log(page);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
