export default (maxScore: number, userScore: number): number =>
  (userScore / maxScore) * 100;
