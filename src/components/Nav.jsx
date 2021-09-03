import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout.js";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg"
        style={{ minHeight: "70px" }}
      >
        <div className="container-fluid nav1">
          <h2 className="navbar-brand">TinyUrl</h2>

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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item  pe-3">
                <Link className="nav-link" to="/">
                  {" "}
                  Home
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

              {/* dropdown */}
              <div className="dropstart">
                <button
                  className="btn btnn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li className="mb-1">
                    <Link to="/dashboard" className="dropdown-item" href="#">
                      Dahsboard
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/about" className="dropdown-item" href="#">
                      My Account
                    </Link>
                  </li>
                   <li className="mb-2">
                    <Logout />
                  </li> 
                  <hr className="dropdown-divider" />

                  {/* <li>
                    <a className="dropdown-item inactive" href="#">
                      Separated link
                    </a>
                  </li> */}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
