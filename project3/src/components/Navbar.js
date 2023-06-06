import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextConvo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"

          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" >
                  {props.item1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.item2}
                </a>
              </li>
            </ul>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
            <label class="form-check-label" for="flexSwitchCheckChecked">{props.textMode}</label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string,
};

Navbar.defaultProps = {
  item1: "Home",
};
