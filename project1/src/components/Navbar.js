import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
        <nav>
            <div className="dropdown">
                <button id="toggleBtn" className="themeBtn" onclick="imagefun()"></button>
            </div>
            <div className="navbar">

                <ul>
                    <li><a href="index.html" className="active">{props.item1}</a></li>
                    <li><a href="contact_me.html">{props.item2}</a></li>
                    <li><a href="Projects.html">{props.item3}</a></li>
                    <li><a href="feedback.html">{props.item4}</a></li>
                </ul>
            </div>

        </nav>
    </div>
  )
}
Navbar.propTypes = { 
    item1: PropTypes.string.isRequired , 
    item2: PropTypes.string , 
    item3: PropTypes.string , 
    item4: PropTypes.string  
}

Navbar.defaultProps ={
    item1: "Home"
}