import { getMatrixDiagonals, createMatrixOf, allElementsAreEqual, getMatrixCollumns } from "../../utils";

const PLAYER_MOVE = 'tic-tac-toe/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe/INITIALIZE';

export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} })
export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} })

const players = {
  x: 'X',
  o: 'O',
}
const emptyCell = ''
export const cellContent = { ...players, emptyCell }

export const reducer = (state, action = {}) => {
  switch (action.type) {

    case INITIALIZE:
      const {gameSize, firstPlayer} = action.payload;
      const matrix = createMatrixOf(gameSize, emptyCell);
      return {matrix, gameSize, nextPlayer: firstPlayer};
    
    case PLAYER_MOVE:
      const {row, col} = action.payload;
      matrix[row][col] = state.nextPlayer;
      const nextPlayer = state.nextPlayer === players.x ? players.o : players.x;
      return {...state, matrix, nextPlayer};
      
    default: 
      return state;
  }
}


export const isWin = (matrix) => {

  const allLines = [
    ...matrix, ...getMatrixCollumns(matrix), ...getMatrixDiagonals(matrix)
  ]

  const matrixFull = false // TODO

  for (const line of allLines) {
    if(allElementsAreEqual(line)  &&  line[0] !== emptyCell)
      return { win: true, winner: line[0], matrixFull }
  }
  
  return { win: false, matrixFull }  
}