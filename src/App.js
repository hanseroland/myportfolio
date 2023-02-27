import React from 'react';
import About from './components/about';
import Banner from './components/Banner';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projets from './components/projets';
import './App.css'








function App() {
  return (
    <>
       <Navbar/>
       <Banner/>
       <About/>
       <Projets/>
       <Contact/>
    </>
  );
}

export default App;
