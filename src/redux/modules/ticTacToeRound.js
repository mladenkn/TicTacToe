import { getMatrixDiagonals, updateMatrixCell, createMatrix, allElementsAreEqual, getMatrixCollumns } from "../../utils";
import flatten from 'flatten';
import { players, cellContent, roundOutcomes } from '../../ticTacToeConstants';

const PLAYER_MOVE = 'tic-tac-toe-round/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe-round/INITIALIZE';

export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} });
export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} });

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {

    case INITIALIZE:
      const {gameSize, firstPlayer} = action.payload;
      const matrix = createMatrix(gameSize, gameSize, cellContent.emptyCell);
      return {matrix, gameSize, isGameOver: false, nextPlayer: firstPlayer};
    
    case PLAYER_MOVE:
      const {row, col} = action.payload;
      const updatedMatrix = updateMatrixCell(state.matrix, {x: row, y: col}, state.nextPlayer);
      const nextPlayer = state.nextPlayer === players.x ? players.o : players.x;
      return { ...state, matrix: updatedMatrix, nextPlayer, ...checkForGameOver(updatedMatrix) };
      
    default: 
      return state;
  }
}
export default reducer;

export const checkForGameOver = (matrix) => {

  const allLines = [
    ...matrix, ...getMatrixCollumns(matrix), ...getMatrixDiagonals(matrix)
  ]

  for (const line of allLines) {
    if(allElementsAreEqual(line)  &&  line[0] !== cellContent.emptyCell){
      let outCome;
      if(line[0] === players.x)
        outCome = roundOutcomes.xWin;
      if(line[0] === players.o)
        outCome = roundOutcomes.oWin;
      return { isGameOver: true, outCome }
    }
  }
  
  const isMatrixFull = flatten(matrix).every(c => c !== cellContent.emptyCell);
  const outCome = isMatrixFull ? roundOutcomes.matrixFull : undefined;
  return { isGameOver: isMatrixFull, outCome }  
}