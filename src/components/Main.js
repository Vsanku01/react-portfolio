import React from 'react';
import Navbar from './Navbar/Navbar';
import Greeting from './Greeting/Greeting';
import Particle from './Particles/Particle';
import Skills from './Skills/Skills';
import './main.css';


function Main() {
  return (
    <div className="main">
      <Navbar />
      <Greeting />
      <Particle />
    </div>
  );
}

export default Main;
