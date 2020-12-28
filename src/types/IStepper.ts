export interface IStepper {
  questionId: string;
  status: `idle` | 'skip' | 'done';
}
