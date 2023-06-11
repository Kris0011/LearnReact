import './App.css';
// import React ,{ Component } from 'react'
import React, { useState }  from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { StickyContainer, Sticky } from 'react-sticky'


export default function App() {
  // const apiKey = "d45e688ec7464a6f85a6256625d57cc4";
  const apiKey = "c5a750e288b94d978f96092aefd4d3b3";


  const [progress,setProgress] =useState(0);
  return (
    <div>
      <Router>
      {/* <StickyContainer>
        <Sticky><Navbar/></Sticky>
      </StickyContainer> */}
        <Navbar/>
        <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={()=>{setProgress(0)}}
        />
        <Routes>
        <Route exact strict path="/"  element={<News apiKey={apiKey} key="general" category="general" setProgress={setProgress}/>}/>
         <Route exact strict path="/business"  element={<News apiKey={apiKey} key="business" category="business" setProgress={setProgress}/>}/>
           <Route exact strict path="/entertainment"  element={<News apiKey={apiKey} key="entertainment" category="entertainment" setProgress={setProgress} />}/>
           <Route exact strict path="/health"  element={<News apiKey={apiKey} key="health" category="health" setProgress={setProgress}/>}/>
           <Route exact strict path="/science"  element={<News apiKey={apiKey} key="science" category="science" setProgress={setProgress}/>}/>
          <Route exact strict path="/sports"  element={<News apiKey={apiKey} key="sports" category="sports" setProgress={setProgress}/>}/>
           <Route exact strict path="/technology"  element={<News apiKey={apiKey} key="technology" category="technology" setProgress={setProgress}/>}/>
           </Routes>

        
      </Router>

    </div>
  )
}