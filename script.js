const pressed = [];
    const secretCode = 'benji';
    window.addEventListener('keyup', (e) => {
      console.log(e.key);
      pressed.push(e.key);
      console.log(pressed);
      pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
        if(pressed.join('').includes(secretCode)){
            console.log('DINg DINg');
            const bg = document.querySelector('body');
            bg.style.background = 'black';
            const header = document.querySelector('h1');
            header.style.removeProperty('display');
        }
    } )