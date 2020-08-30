<div className="row" style={{ zIndex: '1', position: 'absolute', marginLeft: '20px' }}>
<div className="col s12 l7" style={{ marginTop: '100px' }}>
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

<div className="col s12 l4 offset-l1">
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

<div className="col s12 l6">
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <lottie-player
    src="https://assets9.lottiefiles.com/packages/lf20_bZUZLJ.json"
    background="transparent"
    speed="1"
    style={{ width: '500px', height: '500px' }}
    loop
    autoplay
  ></lottie-player>
</div>

<div className="col s12 l6" style={{ marginTop: '100px' }}>
  <Skills />
</div>
<div className = 'row'>
<div className="col" style={{ marginTop: '100px', marginLeft: '100px' }}>
  <Projects />
</div>
</div>
<div className="col s12" style={{ marginTop: '100px'}}>
  <WorkExperience />
</div>


</div>