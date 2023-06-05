import React , {useState} from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const changeStyle = () =>{
    if(myStyle.color === 'black'){
      setStyle({
        color : 'white',
        backgroundColor : 'black'
      })
      setBtnText('Light');
      setBtnClass('btn btn-light');

    }
    else{
      setStyle({
        color : 'black',
        backgroundColor : 'white'
      })
      setBtnText('Dark');
      setBtnClass('btn btn-dark');


    }
    
  }
  const [myStyle , setStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })

  const [btnText, setBtnText] = useState('Dark');
  const [btnClass, setBtnClass] = useState('btn btn-dark');
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid" style={myStyle}>
          <a className="navbar-brand" href="/" style={myStyle}>
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
                <a className="nav-link active" aria-current="page" href="/" style={myStyle}>
                  {props.item1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={myStyle}>
                {props.item2}
                </a>
              </li>
            </ul>
          </div>
          {/* <button type="button" class="btn btn-light">Light</button> */}
          <button type="button" className={btnClass} onClick={changeStyle}>{btnText}</button>
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
