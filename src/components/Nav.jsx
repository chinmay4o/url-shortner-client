import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg"
        style={{ "min-height": "70px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <h2>TinyUrl</h2> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item  pe-3">
                <Link className="nav-link" to="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/about">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/dashboard">
                  {" "}
                  Dashboard
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/login">
                  {" "}
                  Login
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/register">
                  {" "}
                  Register
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/contact">
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
