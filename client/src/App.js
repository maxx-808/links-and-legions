import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Navbar/Nav";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Characters from "./Pages/Characters";
import CharacterLinks from "./Pages/CharacterLinks";
import CharacterLegion from "./Pages/CharacterLegion";
import CharacterNotes from "./Pages/CharacterNotes";
import CharacterQuick from "./Pages/CharacterQuick";

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
          <Route path="/char_legion" component={CharacterLegion} />
          <Route path="/char_notes" component={CharacterNotes} />
          <Route path="/char_quick" component={CharacterQuick} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
