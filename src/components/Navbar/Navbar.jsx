import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Headroom from "react-headroom";
import { greeting } from '../../portfolio'
import './navbar.css'



function Navbar() {
  return (
    <header className = 'header'>
    <div className = 'navbar-fixed indigo darken-3'>
    <nav class = 'indigo darken-3'>
      <div class="container nav-wrapper">

      <a href="/" className="brand-logo">
          <span className="grey-text"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-text">/&gt;</span>
        </a>
        <a href="#" class="sidenav-trigger" data-target = 'mobile-menu'>
          <i class = 'material-icons'>menu</i>
        </a>
        <ul class = 'right hide-on-med-and-down' style = {{ fontFamily: 'Helvetica'}}>
        <li><a href="#skills" className = 'white-text'>Skills</a></li>
        <li><a href="#projects" className = 'white-text'>Projects</a></li>
        <li><a href="#experiences" className = 'white-text'>Work Experiences</a> </li>
        <li><a href="#blogs" className = 'white-text'>Blogs</a> </li>
        <li><a href="#contact" className = 'white-text'>Contact Me</a> </li>
        </ul>
      </div>
    </nav>
  </div>
  <ul class = 'sidenav black' id = 'mobile-menu'>
  <li><a href="#skills" className = 'white-text'>Skills</a></li>
  <li><a href="#projects" className = 'white-text'>Projects</a></li>
  <li><a href="#experiences" className = 'white-text'>Work Experiences</a> </li>
  <li><a href="#blogs" className = 'white-text'>Blogs</a> </li>
  <li><a href="#contact" className = 'white-text'>Contact Me</a> </li>
  </ul>
  </header>
  );
}

export default Navbar;

/* 
    <Headroom>
    <header className = 'header'>
      <div>
        <nav className = 'navbar black'>
          <div className="nav-wrapper container" style={{ marginLeft: '20px' }}>
          <a href="/" className="brand-logo">
          <span className="grey-text"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-text">/&gt;</span>
        </a>
        <a href="" class="sidenav-trigger" data-target = 'mobile-menu'>
          <i class = 'material-icons'>menu</i>
        </a>
            <ul id = 'nav-mobile' className = 'right hide-on-med-and-down' style ={{marginRight: '20px'}}>
                <li><a href="#" className = 'white-text'>Skills</a></li>
                <li><a href="#" className = 'white-text'>Projects</a></li>
                <li><a href="#" className = 'white-text'>Work Experiences</a> </li>
                <li><a href="#" className = 'white-text'>Achievements</a> </li>
                <li><a href="#" className = 'white-text'>Blogs</a> </li>
                <li><a href="#" className = 'white-text'>Contact Me</a> </li>
            </ul>
          </div>
        </nav>
        </div>
    </header>
    </Headroom>
*/