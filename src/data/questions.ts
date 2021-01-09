interface Question {
  id: string;
  difficulty: 'e' | 'm' | 'h';
  image: string;
  defaultHtml: string;
  defaultCss: string;
}

const questions: Question[] = [
  {
    id: `diamond`,
    difficulty: `e`,
    image: `diamond.png`,
    defaultHtml: `<div class='diamond'></div>`,
    defaultCss: `.diamond {\n    margin: 100px;\n    height: 300px;\n    width: 300px;\n    background: #F77E03;\n}`,
  },
  {
    id: `circle`,
    difficulty: `e`,
    image: `circle.png`,
    defaultHtml: `<div class='circle'></div>`,
    defaultCss: `.circle {\n    margin: 50px;\n    height: 400px;\n    width: 400px;\n    background: #EE1466;\n}`,
  },
  {
    id: `stripe`,
    difficulty: `e`,
    image: `stripe.png`,
    defaultHtml: `<div class='container'> <div class='box'></div> <div class='box'></div> <div class='box'></div> </div>`,
    defaultCss: `.container {\n    display: flex;\n} .box {\n /* Enter Your CSS Here */\n}\n\n.box {\n    width: 100px;\n    height: 500px;\n    background: #F77E03;\n}\n\n.box:nth-child(2) {\n    opacity: 0.8;\n}\n\n.box:nth-child(3) {\n    opacity: 0.6;\n}`,
  },
  {
    id: `capsule`,
    difficulty: `e`,
    image: `capsule.png`,
    defaultHtml: `<div class="capsule"></div>`,
    defaultCss: `.capsule {\n    background: #1068F8;\n    height: 300px;\n    margin: 100px 0;\n  }`,
  },
  {
    id: `reverse`,
    difficulty: `e`,
    image: `reverse.png`,
    defaultHtml: `<div class="reverse"> <div class="box"></div> <div class="box" style="opacity: 0.7"></div> <div class="box" style="opacity: 0.5"></div> </div>`,
    defaultCss: `.reverse {
    display: flex;
    height: 100%;
}

.box {
    flex: 1 1 0;
    background: #1068F8;
}`,
  },
  {
    id: `triangle`,
    difficulty: `m`,
    image: `triangle.png`,
    defaultHtml: `<div class='triangle'></div>`,
    defaultCss: `.triangle {\n    margin: 50px;\n    height: 400px;\n    width: 400px;\n    background: #1068F8;\n}`,
  },
  {
    id: `onigiri`,
    difficulty: `m`,
    image: `onigiri.png`,
    defaultHtml: `<div class='onigiri'></div>`,
    defaultCss: `.onigiri {
    margin:50px;
    width: 400px;
    height: 400px;
    background: #ccc;
    border-radius: 50% 50% 10% 10% / 80% 80% 10% 10%;
}

.onigiri::before {
    content: '';
    width: 300px;
    height: 300px;
    background: darkgreen;
    border-radius: 50%;
    transform: translate(50px, 250px);
}`,
  },
  {
    id: `pacman`,
    difficulty: `m`,
    image: `pacman.png`,
    defaultHtml: `<div class='pacman'></div>`,
    defaultCss: `.pacman {\n    border-style: solid;\n    border-width: 250px;\n    border-radius: 50%;\n    border-color: #F7C501;\n    position: relative;\n  }\n  \n  .pacman::after {\n      position: absolute;\n      top: -170px;\n      left: -30px;\n      content: '';\n      width: 60px;\n      height: 60px;\n      display: block;\n      background: black;\n      border-radius: 50%;\n}`,
  },
  {
    id: `rgb`,
    difficulty: `m`,
    image: `rgb.png`,
    defaultHtml: `<div class='rgb'></div>`,
    defaultCss: `/* Colors: red, green, blue */

.rgb {
    height: 100%;
}`,
  },
  {
    id: `overlap`,
    difficulty: `m`,
    image: `overlap.png`,
    defaultHtml: `<div style="overflow: hidden; height: 500px"> <div class="box1"></div> <div class="box2"></div> </div>`,
    defaultCss: `.box1 {
    width: 400px;
    height: 400px;
    background: #F67E03;
}

.box2 {
    width: 400px;
    height: 400px;
    background: #EE1466;
}`,
  },
  {
    id: `checkerboard`,
    difficulty: `h`,
    image: `checkerboard.png`,
    defaultHtml: `<div class="checkerboard"> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> <div class="cell-dark"></div> <div class="cell-light"></div> </div>`,
    defaultCss: `.checkerboard {\n /* Enter Your CSS Here */\n} .cell-light {\n /* Enter Your CSS Here */\n} .cell-dark {\n /* Enter Your CSS Here */\n}`,
  },
  {
    id: `smile`,
    difficulty: `h`,
    image: `smile.png`,
    defaultHtml: `<div class='smile'></div>`,
    defaultCss: `.smile {\n    margin: 50px;\n    height: 400px;\n    width: 400px;\n    background: #EADCB6;\n    position: relative;\n}\n\n.smile::before {\n    content: '. .';\n    position: absolute;\n    font-size: 300px;\n    top: 50px;\n    width: 100%;\n    text-align: center;\n    line-height: 0;\n    color: black;\n}\n\n.smile::after {\n    content: '';\n    position: absolute;\n    background: #EE1466;\n    width: 300px;\n    height: 150px;\n    left: 50px;\n    top: 200px;\n}`,
  },
  {
    id: `palette`,
    difficulty: `h`,
    image: `palette.png`,
    defaultHtml: `<div class='palette'> <div style="grid-area: red; background: red"></div> <div style="grid-area: orange; background: orange"></div> <div style="grid-area: yellow; background: yellow"></div> <div style="grid-area: lime; background: lime"></div> <div style="grid-area: blue; background: blue"></div> <div style="grid-area: purple; background: purple"></div> </div>`,
    defaultCss: `.palette {
      height: 100%;
      display: grid;
  }`,
  },
  {
    id: `archer`,
    difficulty: `h`,
    image: `archer.png`,
    defaultHtml: `<div class='archer'></div>`,
    defaultCss: `/* Colors: yellow, red, deepskyblue, black, white */ .archer {\n /* Enter Your CSS Here */\n}`,
  },
];

export default questions;
