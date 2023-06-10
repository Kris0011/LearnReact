import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import News from './components/News';

// export default class App extends Component {
  
//   render() {
//     return (
//       <div>
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route exact strict path="/"  element={<News key="general" category="general"/>}/>
//           <Route exact strict path="/business"  element={<News key="business" category="business"/>}/>
//           <Route exact strict path="/entertainment"  element={<News key="entertainment" category="entertainment" />}/>
//           <Route exact strict path="/health"  element={<News key="health" category="health" />}/>
//           <Route exact strict path="/science"  element={<News key="science" category="science" />}/>
//           <Route exact strict path="/sports"  element={<News key="sports" category="sports" />}/>
//           <Route exact strict path="/technology"  element={<News key="technology" category="technology" />}/>
//         </Routes>

        
//       </Router>

//       </div>
//     )
//   }
// }

export default function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact  path="/"  element={<News key="general" category="general"/>}/>
          <Route exact  path="/business"  element={<News key="business" category="business"/>}/>
          <Route exact  path="/entertainment"  element={<News key="entertainment" category="entertainment" />}/>
          <Route exact  path="/health"  element={<News key="health" category="health" />}/>
          <Route exact  path="/science"  element={<News key="science" category="science" />}/>
          <Route exact  path="/sports"  element={<News key="sports" category="sports" />}/>
          <Route exact  path="/technology"  element={<News key="technology" category="technology" />}/>
        </Routes>

        
      </Router>

    </div>
  )
}
