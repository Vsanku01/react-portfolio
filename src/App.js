import React, { Component } from 'react';
import './App.css';
import Particle from './components/Particles/Particle';
import Navbar from './components/Navbar/Navbar';
import Greeting from './components/Greeting/Greeting';
import Skills from './components/Skills/Skills';
import Main from './components/Main';
import {CubeGrid} from 'styled-loaders-react'

class App extends Component {
  state = {
    loading: true
  }
  componentDidMount = () => {
    setTimeout( () => {
      this.setState({
        loading: false
      })
    })
  }
  render() {
    return (
      <div className="App">
        {
          this.state.loading ? <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_VNMPxa.json"  background="transparent"  speed="1"  style={{ width: '50px', height: '50px' }}  loop autoplay></lottie-player>: <Main />
        }
      </div>
    );
  }
}

export default App;

/*
      <Navbar />
      <Greeting />
      <Skills />
      <Particle />

       <CubeGrid  color = 'white'/>

      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_VNMPxa.json"  background="transparent"  speed="1"  style={{ width: '50px', height: '50px' }}  loop autoplay></lottie-player>

*/
