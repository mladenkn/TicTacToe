import { filterMatrixCells } from "../utils/matrix";
import { cellContent, roundStatus } from "../ticTacToeConstants";
import { randomArrayElement } from "../utils";
import { playerMove } from './gameRound';

export const stateChangeSubscriber = (state, dispatch) => {
  if(!state || !state.gameRounds || !state.gameRounds.current || !state.gamePlayers)
    return;

  if(state.gameRounds.current.status === roundStatus.playing &&
    state.gameRounds.current.nextPlayer === state.gamePlayers.AIPlayerName){
    const nextMoveCoords = chooseNextMove(state.gameRounds.current.matrix);
    setTimeout(() => dispatch(playerMove(nextMoveCoords.row, nextMoveCoords.col)), 2000)
  }
}

const chooseNextMove = (matrix) => {
  const availableCells = filterMatrixCells(matrix, cell => cell.value === cellContent.emptyCell);
  return randomArrayElement(availableCells);
}