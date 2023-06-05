import React from 'react'
import Navbar from "./components/Navbar"
import Form from "./components/Form"

function App() {
  return (
   <>
    <Navbar item2="Help"/>
    <div className="container">

    <Form title="Enter the text you want to modify"/>
    </div>
   </>
  );
}

export default App;
