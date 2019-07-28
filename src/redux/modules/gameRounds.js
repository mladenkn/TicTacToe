import { players, roundStatus } from '../../ticTacToeConstants';
import * as singleRound from './gameRound';

const NEW_ROUND = 'tic-tac-toe-rounds/NEW_ROUND';

export const newRound = (gameSize, firstPlayer) => ({ type: NEW_ROUND, payload: {gameSize, firstPlayer} });

export const reducer = (state = {current: undefined, history: []}, action = {}) => {

  switch (action.type) {

    case NEW_ROUND: {
      const { gameSize, firstPlayer } = action.payload
      const current = singleRound.reducer(state.current, singleRound.initialize(gameSize, firstPlayer));
      return {...state, current};
    }
    
    default: {
      const current = singleRound.reducer(state.current, action);
      let history = state.history;
      if(current.status !== roundStatus.playing)
        history = history.concat(current);
      return {...state, history, current };
    }
  }
}
 
export default reducer;

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