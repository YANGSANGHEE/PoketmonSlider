import { makeDom } from './Dommake.js';
// bgm

// Dom Tree
const root = document.getElementById('root');
root.innerHTML = `
${makeDom.MakeTag('div', 2, 'div')}
${makeDom.MakeTag('div', 3, 'div')}
`;
makeDom.AppendTag(root.children[0].children[1], '<p></p><div></div>');
//SliderElement
root.children[1].children[0].setAttribute('class', 'Slider-Container');
makeDom.AppendTag(
  root.children[1].children[0],
  `<div class = "Slider-Wrapper"></div>`
);
root.children[1].children[1].setAttribute('class', 'Next-Btn');
root.children[1].children[2].setAttribute('class', 'Prev-Btn');
// Dom Tree Set end

// Doc init
const docinit = {
  body: document.body,
  root: root,
  rootDiv: [...root.children],
  rootDiv1Con: [...root.children[0].children[1].children],
  SliderContainer: document.querySelector('.Slider-Container'),
  SliderWrapper: document.querySelector('.Slider-Wrapper'),
  SliderElement: document.querySelectorAll('.Slider-Element'),
  NextBtn: document.querySelector('.Next-Btn'),
  PrevBtn: document.querySelector('.Prev-Btn'),
};
console.log(docinit.SliderElement);
//Doc init end

// style
// set
const w = (w) => {
  return w / (window.innerWidth / 100) + `vw`;
};
makeDom.Style(docinit.rootDiv[1], {
  background: 'url(./img/forest.jpg)no-repeat center',
  backgroundSize: 'cover',
  transition: 'ease .5s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  opacity: 0,
});

makeDom.Style(docinit.body, {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  fontFamily: 'Stardust',
});

docinit.rootDiv.forEach((value) => {
  makeDom.Style(value, {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
});

makeDom.Style(docinit.rootDiv[0], {
  flexDirection: 'column',
  transition: 'ease-out 1.6s',
});

makeDom.Style(docinit.rootDiv[0].children[0], {
  width: w(212),
  height: w(356),
  background: 'url(./img/mrOh.png)no-repeat center',
  backgroundSize: 'cover',
  marginBottom: w(83),
  opacity: '0',
  transition: 'ease-in 1s',
});
makeDom.Style(docinit.rootDiv[0].children[1], {
  width: w(1050),
  height: w(295),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'url(./img/logbox.png) no-repeat center',
  backgroundSize: 'cover',
  position: 'relative',
  fontSize: w(20),
});
makeDom.Style(docinit.rootDiv1Con[1], {
  width: w(28),
  height: w(22),
  background: 'url(./img/dot.png) no-repeat center',
  backgroundSize: 'cover',
  position: 'absolute',
  bottom: w(50),
  right: w(100),
  display: 'none',
});

// Typing
const txtcon = '학원밖은 위험하니 이포켓몬 중 한마리를 골라보거라.'.split('');
let Count = 0;
const typing = () => {
  if (Count < txtcon.length) {
    docinit.rootDiv1Con[0].append(txtcon[Count]);
    Count++;
  }
};
// bgm
// let Bgm = new Audio('./sound/bgm_cut.mp3');
// window.addEventListener('load', () => {
//    Bgm.load();
// });
//  Bgm.volume = 0.5;
//  Bgm.loop = true;
function Timeout() {
  //animation
  setTimeout(() => {
    docinit.rootDiv[0].children[0].style.opacity = '1';
    setTimeout(() => {
      setInterval(typing, 200);
      setTimeout(() => {
        // blink
        docinit.rootDiv1Con[1].style.display = 'block';
        docinit.rootDiv1Con[1].animate([{ opacity: '0' }], {
          duration: 1000,
          iterations: Infinity,
        });
        // key evnet
        window.addEventListener('keydown', () => {
          // Bgm.pause();
          makeDom.Style(docinit.rootDiv[0], {
            opacity: '0',
            zIndex: '-1',
          });
          makeDom.Style(docinit.rootDiv[1], {
            opacity: '1',
          });
        });
      }, 6500);
      // Bgm.play();
    }, 2000);
  }, 2000);
}
Timeout();
// Main end

// slider
function PokemonLoad(Count) {
  const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon-species/${Count}`;
  const request = new XMLHttpRequest();
  request.open('GET', _BASIC_URL);
  request.responseType = 'json';
  request.send();
  request.addEventListener('load', () => {
    let PoketmonList = request.response;
    console.log(PoketmonList);
    makeDom.Style(docinit.SliderContainer, {
      width: '72.45rem',
      height: 'auto',
      position: 'relative',
      overflowX: 'hidden',
    });
    makeDom.Style(docinit.SliderWrapper, {
      width: '580rem',
      height: 'auto',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
    });
    makeDom.Style(docinit.NextBtn, {
      width: '6rem',
      height: '6rem',
      background: 'url(./img/left.png)no-repeat center',
      backgroundSize: 'cover',
      position: 'absolute',
      left: '100rem',
    });
    makeDom.Style(docinit.PrevBtn, {
      width: '6rem',
      height: '6rem',
      background: 'url(./img/right.png)no-repeat center',
      backgroundSize: 'cover',
      position: 'absolute',
      right: '100rem',
    });
    // make Slider Ele
    makeDom.AppendTag(docinit.SliderWrapper, makeDom.MakeTag2(Count, 'div'));
    let SliderEles = [...docinit.SliderWrapper.children];
    SliderEles.forEach((value) => {
      value.setAttribute('class', 'Slider-Element');
      makeDom.Style(value, {
        width: '22rem',
        height: '33.1rem',
        display: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'url(./img/poketedx.png)no-repeat center',
        backgroundSize: 'cover',
        marginRight: '3rem',
      });
    });
    makeDom.AppendTag(
      docinit.SliderElement,
      `${makeDom.MakeTag2(1, 'div')}${makeDom.MakeTag2(
        1,
        'p'
      )}${makeDom.MakeTag2(1, 'p')}`
    );
  });
}
let Pcount = 0;
for (let i = 0; i < 20; i++) {
  Pcount++;
  PokemonLoad(Pcount);
}
