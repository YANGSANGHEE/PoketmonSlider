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
const txtcon = '???????????? ???????????? ???????????? ??? ???????????? ???????????????.';
let Count = 0;
const typing = () => {
  if (Count < txtcon.length) {
    docinit.rootDiv1Con[0].append(txtcon[Count]);
    Count++;
  }
};
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
          });
          window.location.href = './slider.html';
        });
      }, 6500);
    }, 2000);
  }, 2000);
}
Timeout();
// Main end
