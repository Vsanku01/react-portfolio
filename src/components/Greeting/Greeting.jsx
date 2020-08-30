import React from 'react';
import emoji from 'react-easy-emoji';
import { Fade } from 'react-reveal';
import { greeting } from '../../portfolio';
import 'materialize-css/dist/css/materialize.min.css';
import './greeting.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import Skills from '../Skills/Skills';
import Projects from '../projects/Projects';
import WorkExperience from '../WorkExperience/WorkExperience';
import Blogs from '../blogs/Blogs';
import Contact from '../Contact/Contact';

function Greeting() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <section  className = 'container' style = {{zIndex: '1', position: 'absolute', marginTop: '120px', marginLeft: '20px'}}>
        {/* ROW-1 */}
        <div className = 'row'>
          <div className = 'col s12 l8'>
              <h1 className="white-text" style={{ zIndex: '1' }}>
            {greeting.title} <span className="wave-emoji">{emoji('👋')}</span>
          </h1>
          <h4 className="white-text subtitle" style={{ marginTop: '30px' }}>
          {greeting.subTitle}
        </h4>
        <SocialMedia />
        <div style={{ marginTop: '50px' }}>
          <a href="" className="btn blue lighten-1" style={{ marginLeft: '10px', marginRight: '20px' }}>
          CONTACT ME
          </a>
          <a href="" className="btn blue lighten-1">
            SEE MY RESUME
          </a>
        </div>
          </div>

          <div className = 'col s12 l3 push-l2'>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_bXRG9q.json"
            background="transparent"
            speed="1"
            style={{ width: '500px', height: '500px' }}
            loop
            autoplay
          ></lottie-player>
          </div>
        </div>
        {/* ROW-2 */}
        <div className = 'row'>
        <div className = 'col s12 l2'>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_bZUZLJ.json"
          background="transparent"
          speed="1"
          style={{ width: '500px', height: '500px' }}
          loop
          autoplay
        ></lottie-player>
          </div>

          <div className = 'col s12 l8 offset-l2 push-l3 right-align'>
          <Skills />
          </div>
        </div>

        {/* ROW-3 */}
        <div className = 'row'>
        <div className = 'col s12 l12'>
            <Projects />
          </div>
        </div>
        {/* ROW-4 */}
        <div className = 'row'>
        <div className = 'col s12 l12'>
            <WorkExperience />
          </div>
        </div>
        {/* ROW-5 */}
        <div className = 'row'>
        <div className = 'col s12 l12'>
            < Blogs />
          </div>
        </div>

        {/* ROW-6 */}
        <div className = 'row' style = {{margin: 'auto', width: '50%'}}>
        <div className = 'col s12 l12'>
            < Contact />
          </div>
        </div>


      </section>
    </Fade>
  );
}

export default Greeting;