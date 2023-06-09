import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact strict path="/"  element={<News key="general" category="general"/>}/>
          <Route exact strict path="/business"  element={<News key="business" category="business" title="Business news"/>}/>
          <Route exact strict path="/entertainment"  element={<News key="entertainment" category="entertainment" title="Entertainment news"/>}/>
          <Route exact strict path="/health"  element={<News key="health" category="health" title="Health news"/>}/>
          <Route exact strict path="/science"  element={<News key="science" category="science" title="Science news"/>}/>
          <Route exact strict path="/sports"  element={<News key="sports" category="sports" title="Sports news"/>}/>
          <Route exact strict path="/technology"  element={<News key="technology" category="technology" title="Technology news"/>}/>
        </Routes>

        
      </Router>

      </div>
    )
  }
}

