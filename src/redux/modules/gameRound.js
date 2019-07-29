import { getMatrixDiagonals, updateMatrixCell, createMatrix, allElementsAreEqual, getMatrixCollumns } from "../../utils";
import flatten from 'flatten';
import { players, cellContent, roundStatus } from '../../ticTacToeConstants';

const PLAYER_MOVE = 'tic-tac-toe-round/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe-round/INITIALIZE';

export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} });
export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} });

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {

    case INITIALIZE:
      const {gameSize, firstPlayer} = action.payload;
      const matrix = createMatrix(gameSize, gameSize, cellContent.emptyCell);
      return {matrix, gameSize, status: roundStatus.playing, nextPlayer: firstPlayer};
    
    case PLAYER_MOVE:
      const {row, col} = action.payload;
      const updatedMatrix = updateMatrixCell(state.matrix, {x: row, y: col}, state.nextPlayer);
      const nextPlayer = state.nextPlayer === players.x ? players.o : players.x;
      return { ...state, matrix: updatedMatrix, nextPlayer, status: getStatus(updatedMatrix) };
      
    default: 
      return state;
  }
}
export default reducer;

export const getStatus = matrix => {

  const allLines = [
    ...matrix, ...getMatrixCollumns(matrix), ...getMatrixDiagonals(matrix)
  ];

  for (const line of allLines) {
    if(allElementsAreEqual(line)  &&  line[0] !== cellContent.emptyCell){
      if(line[0] === players.x)
        return roundStatus.xWin;
      if(line[0] === players.o)
        return roundStatus.oWin;
    }
  }
  
  const isMatrixFull = flatten(matrix).every(c => c !== cellContent.emptyCell);
  return isMatrixFull ? roundStatus.matrixFull : roundStatus.playing;
}

export const selectAvailableCells = state => {

}