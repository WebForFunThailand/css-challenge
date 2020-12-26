import React, { createContext, useState } from 'react';

interface IScoreStateContext {
  rankPercentage: number;
  time: string;
  percentage: number;
}

interface IScoreStateEvent {
  onChangeScoreState: (newState: IScoreStateContext) => void;
}

export const ScoreContext = createContext<
  IScoreStateContext & IScoreStateEvent
>(null);

const ScoreStateContext = ({ children }) => {
  const [scoreState, setScoreState] = useState<IScoreStateContext>({
    rankPercentage: 0,
    time: `00:00`,
    percentage: 0,
  });

  const onChangeScoreState = (newState: IScoreStateContext) => {
    setScoreState(newState);
  };

  return (
    <ScoreContext.Provider value={{ ...scoreState, onChangeScoreState }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreStateContext;
