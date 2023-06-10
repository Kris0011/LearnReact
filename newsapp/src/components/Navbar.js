// import React, { Component } from 'react'
import { Link } from "react-router-dom";

// export class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="/">News88</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/business">Business</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/entertainment">Entertainment</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/health">Health</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/science">Science</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/sports">Sports</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/technology">Technology</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }
// export default Navbar

import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News88
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
