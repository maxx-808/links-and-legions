import React, { useEffect, useState } from "react";
import "../Nav.css";

const Nav = (props) => {
  useEffect(() => {
    //if statements to highlight page location on navbar
  });

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/"></a>
      </nav>
    </div>
  );
};

export default Nav;
