import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Alert from "./components/Alert";
import AboutUS from "./components/AboutUs";


function App() {
  const [textMode, setTextMode] = useState('Enable Dark Mode');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  setInterval(() => {
    document.title = 'TextConvo App';
  }, 4000)

  setInterval(() => {
    document.title = 'By Kris Patel';
  }, 8000)


  const showAlert = (msg, type) => {
    setAlert(
      {
        msg: msg,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setTextMode('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else {
      setMode('dark');
      setTextMode('Disable Dark Mode');
      document.body.style.backgroundColor = '#1c1c1c';
      document.body.style.color = 'white';
    }
  }
  return (
    <>
      <Router>
      <Navbar item2="About Us" mode={mode} toggleMode={toggleMode} textMode={textMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Form title="Enter the text you want to modify" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<AboutUS />} />
        </Routes>
      </div>
    </Router>


    </>
  );
}

export default App;
