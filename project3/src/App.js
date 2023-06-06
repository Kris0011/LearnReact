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
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      
      
    }
    else{
      setMode('dark');
      setTextMode('Disable Dark Mode');
      document.body.style.backgroundColor = '#1c1c1c';
      document.body.style.color = 'white';


    }
  }
  return (
   <>
    <Navbar item2="Help" mode={mode}  toggleMode={toggleMode} textMode={textMode}/>
    <div className="container" >
    <Form title="Enter the text you want to modify" mode={mode}/>
    </div>
   </>
  );
}

export default App;
