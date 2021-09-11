import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Contacts from './components/Contacts';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Contacts />
    </div>
  );
}

export default App;
