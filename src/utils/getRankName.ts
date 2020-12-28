import { IRank } from '../types/IRank';

export default (listRanks: IRank[], userScore: number) =>
  listRanks.find(({ min, max }) => userScore <= max && userScore >= min).name;
