import { getMatrixDiagonals, updateMatrixCell, createMatrix, allElementsAreEqual, getMatrixCollumns } from "../../utils";
import flatten from 'flatten';

const PLAYER_MOVE = 'tic-tac-toe/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe/INITIALIZE';
export const GAME_OVER = 'tic-tac-toe/FINISH';

export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} });
export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} });
export const gameOver = (state) => ({ type: GAME_OVER, payload: state });

export const players = {
  x: 'X',
  o: 'O',
}
const emptyCell = ''
export const cellContent = { ...players, emptyCell }

export const middleware = (state, _, dispatch) => {
  if(state.isGameOver)
    dispatch(gameOver(state));
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
      return { ...state, matrix: updatedMatrix, nextPlayer, ...checkForGameOver(updatedMatrix) };
      
    default: 
      return state;
  }
}

export const checkForGameOver = (matrix) => {

  const allLines = [
    ...matrix, ...getMatrixCollumns(matrix), ...getMatrixDiagonals(matrix)
  ]

  const isMatrixFull = flatten(matrix).every(c => c !== emptyCell);

  for (const line of allLines) {
    if(allElementsAreEqual(line)  &&  line[0] !== emptyCell)
      return { isGameOver: true, isWin: true, winner: line[0], isMatrixFull }
  }
  
  return { isWin: false, isGameOver: isMatrixFull, isMatrixFull }  
}