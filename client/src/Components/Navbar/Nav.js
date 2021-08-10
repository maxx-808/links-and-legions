import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = (props) => {
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
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Links
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="https://www.github.com/maxx-808/budget-tracking"
                  target="blank"
                >
                  Github Repo
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.github.com/maxx-808"
                  target="blank"
                >
                  Github Profile
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/in/max-higa-2460351b4/"
                  target="blank"
                >
                  LinkedIn
                </a>
                {/* <div className="dropdown-divider"></div> */}
                <a
                  className="dropdown-item"
                  href="https://maxx-808.github.io/portfolio-react/"
                  target="blank"
                >
                  Portfolio
                </a>
                <a
                  className="dropdown-item"
                  href="https://docs.google.com/document/d/1Miox-krIs-7t6rZeaTUT29gVSKrHD0Sf0FtkZESXulU/edit?usp=sharing"
                  target="blank"
                >
                  Resume
                </a>
              </div>
            </li>
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
      </nav>
    </div>
  );
};

export default Nav;
