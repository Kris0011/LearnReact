import './App.css';
// import React ,{ Component } from 'react'
import React  from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export default function App() {
  // const apiKey = "d45e688ec7464a6f85a6256625d57cc4";
  const apiKey = "c5a750e288b94d978f96092aefd4d3b3";
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact strict path="/"  element={<News apiKey={apiKey} key="general" category="general"/>}/>
         <Route exact strict path="/business"  element={<News apiKey={apiKey} key="business" category="business"/>}/>
           <Route exact strict path="/entertainment"  element={<News apiKey={apiKey} key="entertainment" category="entertainment" />}/>
           <Route exact strict path="/health"  element={<News apiKey={apiKey} key="health" category="health" />}/>
           <Route exact strict path="/science"  element={<News apiKey={apiKey} key="science" category="science" />}/>
          <Route exact strict path="/sports"  element={<News apiKey={apiKey} key="sports" category="sports" />}/>
           <Route exact strict path="/technology"  element={<News apiKey={apiKey} key="technology" category="technology" />}/>
           </Routes>

        
      </Router>

    </div>
  )
}


// export default class App extends Component {

  
//   apiKey = "d45e688ec7464a6f85a6256625d57cc4";
//   // apiKey = process.env.NEWS_API;
//   render() {
//     return (
//       <div>
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route exact strict path="/"  element={<News apiKey={this.apiKey} key="general" category="general"/>}/>
//           <Route exact strict path="/business"  element={<News apiKey={this.apiKey} key="business" category="business"/>}/>
//           <Route exact strict path="/entertainment"  element={<News apiKey={this.apiKey} key="entertainment" category="entertainment" />}/>
//           <Route exact strict path="/health"  element={<News apiKey={this.apiKey} key="health" category="health" />}/>
//           <Route exact strict path="/science"  element={<News apiKey={this.apiKey} key="science" category="science" />}/>
//           <Route exact strict path="/sports"  element={<News apiKey={this.apiKey} key="sports" category="sports" />}/>
//           <Route exact strict path="/technology"  element={<News apiKey={this.apiKey} key="technology" category="technology" />}/>
//         </Routes>

        
//       </Router>

//       </div>
//     )
//   }
// }

