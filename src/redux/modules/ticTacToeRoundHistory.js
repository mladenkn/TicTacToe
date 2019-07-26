import { FINISH as ROUND_FINISH, players } from './ticTacToe'

const NEW_ROUND = 'tic-tac-toe-round-history/NEW_ROUND';

export const newRound = () => ({ type: NEW_ROUND })

export const reducer = (state = [], action = {}) => {

  switch (action.type) {

    case ROUND_FINISH: 
      const roundState = action.payload;
      return [...state, roundState];
    
    default: return state;
  }
}

export const selectResultHistory = (stateHistory) => {
  let xWinCount = 0;
  let oWinCount = 0;
  let drawCount = 0;

  stateHistory.forEach(s => {
    if(s.winner === players.x)
      xWinCount++;
    else if(s.winner === players.o)
      oWinCount++;
    else
      drawCount++;
  });

  return {xWinCount, oWinCount, drawCount};
}