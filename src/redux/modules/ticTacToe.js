import { getMatrixDiagonals, updateMatrixCell, createMatrix, allElementsAreEqual, getMatrixCollumns } from "../../utils";
import flatten from 'flatten';

const PLAYER_MOVE = 'tic-tac-toe/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe/INITIALIZE';
export const FINISH = 'tic-tac-toe/FINISH';

export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} });
export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} });
export const finish = (state) => ({ type: INITIALIZE, payload: state });

export const players = {
  x: 'X',
  o: 'O',
}
const emptyCell = ''
export const cellContent = { ...players, emptyCell }

export const middleware = (state, _, dispatch) => {
  if(state.isFinish)
    dispatch(finish(state));
}

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {

    case INITIALIZE:
      const {gameSize, firstPlayer} = action.payload;
      const matrix = createMatrix(gameSize, gameSize, emptyCell);
      return {matrix, gameSize, initialized: true, nextPlayer: firstPlayer};
    
    case PLAYER_MOVE:
      const {row, col} = action.payload;
      const updatedMatrix = updateMatrixCell(state.matrix, {x: row, y: col}, state.nextPlayer);
      const nextPlayer = state.nextPlayer === players.x ? players.o : players.x;
      return { ...state, matrix: updatedMatrix, nextPlayer, ...checkForFinish(updatedMatrix) };
      
    default: 
      return state;
  }
}

export const checkForFinish = (matrix) => {

  const allLines = [
    ...matrix, ...getMatrixCollumns(matrix), ...getMatrixDiagonals(matrix)
  ]

  const isMatrixFull = flatten(matrix).every(c => c !== emptyCell);

  for (const line of allLines) {
    if(allElementsAreEqual(line)  &&  line[0] !== emptyCell)
      return { isFinish: true, isWin: true, winner: line[0], isMatrixFull }
  }
  
  return { isWin: false, isFinish: isMatrixFull, isMatrixFull }  
}