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
    id: `debug-easy1`,
    difficulty: `e`,
    image: `q0.png`,
    defaultHtml: `<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-easy2`,
    difficulty: `e`,
    image: `q1.png`,
    defaultHtml: `<div class='debug-question2'></div>`,
    defaultCss: `.debug-question2 {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-medium1`,
    difficulty: `m`,
    image: `q0.png`,
    defaultHtml: `<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-medium2`,
    difficulty: `m`,
    image: `q1.png`,
    defaultHtml: `<div class='debug-question2'></div>`,
    defaultCss: `.debug-question2 {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-hard1`,
    difficulty: `h`,
    image: `q0.png`,
    defaultHtml: `<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
  {
    id: `debug-hard2`,
    difficulty: `h`,
    image: `q1.png`,
    defaultHtml: `<div class='debug-question2'></div>`,
    defaultCss: `.debug-question2 {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 50000,
  },
];

export default questions;
