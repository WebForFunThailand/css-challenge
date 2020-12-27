interface Question {
  id: number;
  difficulty: 'e' | 'm' | 'h';
  image: string;
  defaultHtml: string;
  defaultCss: string;
  usedPixels: number;
}

const questions: Question[] = [
  {
    id: 0,
    difficulty: `e`,
    image: `q0.png`,
    defaultHtml: `<!-- View Only -->\n<div class='debug-question'></div>`,
    defaultCss: `.debug-question {\n    /* Enter Your CSS Here */\n}`,
    usedPixels: 0,
  },
];

export default questions;
