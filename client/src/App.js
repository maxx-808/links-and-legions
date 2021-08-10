import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Navbar/Nav";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Characters from "./Pages/Characters";
import CharacterLinks from "./Pages/CharacterLinks";

function App() {
  const page = window.location.pathname;
  console.log(page);
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/char" component={Characters} />
          <Route path="/char_links" component={CharacterLinks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
