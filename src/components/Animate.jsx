import React from 'react';

function Animate() {
  return (
    <div>
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_hDrFAh.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></lottie-player>
      
<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ptN80u.json"  background="transparent"  speed="1"  style={{ width: '300px', height: '300px' }}    loop controls autoplay></lottie-player>

<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_E3exCx.json"  background="transparent"  speed="1"  style={{ width: '300px', height: '300px' }}  loop  autoplay></lottie-player>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_LSYJ4m.json"  background="transparent"  speed="1"  style={{ width: '300px', height: '300px' }}   loop controls autoplay></lottie-player>

    </div>
  );
}

export default Animate;
