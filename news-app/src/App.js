import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
const App =()=> {
  const apiKey = 'e75f681d411b4d93b5cab2e9f5d8d57a'
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} key="general" pageSize={6} country={'in'} category='general' />} />
            <Route exact path="/business" element={<News apiKey={apiKey} key="business" pageSize={6} country={'in'} category='business' />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={6} country={'in'} category='entertainment' />} />
            <Route exact path="/general" element={<News apiKey={apiKey} key="general" pageSize={6} country={'in'} category='general' />} />
            <Route exact path="/health" element={<News apiKey={apiKey} key="health" pageSize={6} country={'in'} category='health' />} />
            <Route exact path="/science" element={<News apiKey={apiKey} key="science" pageSize={6} country={'in'} category='science' />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={6} country={'in'} category='sports' />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={6} country={'in'} category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
}
export default App