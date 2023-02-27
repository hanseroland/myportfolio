import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import About from './components/about';
import Banner from './components/Banner';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projets from './components/projets';
import './App.css'








function App() {
  return (
    <Router>
       <Navbar/>
       <Banner/>
       <About/>
       <Projets/>
       <Contact/>
    </Router>
  );
}

export default App;
