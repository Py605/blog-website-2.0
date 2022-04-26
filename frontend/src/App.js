import './App.css';
import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {Link} from "react-router-dom"
import Compose from './components/Compose'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Router>
      
      <Routes>  
        
        <Route path='/'element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/compose' element={<Compose />} />
        <Route path='/home' element={<Home name={"nothing"}/>} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
