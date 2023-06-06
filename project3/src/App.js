import Navbar from "./components/Navbar"
import Form from "./components/Form"
import React, { useState } from 'react'

function App() {
  const [textMode,setTextMode] = useState('Enable Dark Mode');
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      setTextMode('Enable Dark Mode');
      
    }
    else{
      setMode('dark');
      setTextMode('Disable Dark Mode');


    }
  }
  return (
   <body data-bs-theme={mode}>
    <Navbar item2="Help" mode={mode}  toggleMode={toggleMode} textMode={textMode}/>
    <div className="container" >
    <Form title="Enter the text you want to modify" mode={mode}/>
    </div>
   </body>
  );
}

export default App;
