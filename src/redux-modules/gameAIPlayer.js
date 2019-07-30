import { filterMatrixCells } from "../utils/matrix";
import { cellContent, roundStatus } from "../ticTacToeConstants";
import { randomArrayElement } from "../utils";
import { playerMove } from './gameRound';

export const stateChangeSubscriber = (state, dispatch) => {
  if(!state || !state.gameRounds || !state.gameRounds.current || !state.gameAIPlayer)
    return;

  if(state.gameRounds.current.status === roundStatus.playing &&
    state.gameRounds.current.nextPlayer === state.gameAIPlayer.playerName){
    const nextMoveCoords = decideNextMove(state.gameRounds.current.matrix);
    setTimeout(() => dispatch(playerMove(nextMoveCoords.row, nextMoveCoords.col)), 300)
  }
}

const decideNextMove = (matrix) => {
  const availableCells = filterMatrixCells(matrix, cell => cell.value === cellContent.emptyCell);
  return randomArrayElement(availableCells);
}

const INITIALIZE = 'game-ai-player/INITIALIZE';

export const initialize = (playerName) => ({ type: INITIALIZE, payload: {playerName} });

export const reducer = (state = null, action) => {
  switch(action.type){
    case INITIALIZE:
      return action.payload
    default:
      return state;
  }
}
 
export default reducer;