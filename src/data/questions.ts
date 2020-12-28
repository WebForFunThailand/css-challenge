interface Question {
  id: string;
  difficulty: 'e' | 'm' | 'h';
  image: string;
  defaultHtml: string;
  defaultCss: string;
  usedPixels: number;
}

const questions: Question[] = [
  {
    id: `debug-easy`,
    difficulty: `e`,
    image: `q0.png`,
    defaultHtml: `<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-medium`,
    difficulty: `m`,
    image: `q0.png`,
    defaultHtml: `<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-hard`,
    difficulty: `h`,
    image: `q0.png`,
    defaultHtml: `<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
];

export default questions;
