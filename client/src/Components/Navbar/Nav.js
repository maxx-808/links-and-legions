import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = (props) => {
  const click = () => {
    console.log("clicked");
  };
  useEffect(() => {
    //if statements to highlight page location on navbar
  });

  return (
    <div className="navbars">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Links and Legions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/char_quick">
                Characters
              </a>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Character Tables
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/char">
                  All Character Data
                </a>
                <a className="dropdown-item" href="/char_links">
                  Characters Link Skills
                </a>
                <a className="dropdown-item" href="/char_legion">
                  Characters Legion
                </a>
                {/* <div className="dropdown-divider"></div> */}
                <a className="dropdown-item" href="/char_notes">
                  Character Notes
                </a>
                {/* <a className="dropdown-item" href=""></a> */}
              </div>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href=""></a>
            </li> */}
          </ul>
          <div className="my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li id="login" className="nav-item active">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="character name" />
          <button className="searchBtn" type="button" onClick={click}>
            search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
