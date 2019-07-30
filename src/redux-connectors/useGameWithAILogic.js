import { useGameLogic } from "./useGameLogic";
import React from 'react';
import { useSelector } from 'react-redux';
import { roundStatus } from "../ticTacToeConstants";

export const useGameWithAILogic = () => {
  const logic = useGameLogic();
  const isUsersTurn = useSelector(s => 
    s.gameRounds.current.status === roundStatus.playing && 
    s.gameRounds.current.nextPlayer !== s.gameAIPlayer.playerName
  );
  return {...logic, isUsersTurn};
}

export const withGameWithAILogic = (propName = 'gameWithAILogic') => (Component) => (otherProps) => 
{
  const injectedProps = {[propName]: useGameWithAILogic()};
  return <Component {...injectedProps} {...otherProps} />;
} 