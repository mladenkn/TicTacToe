import { createNullMatrix, allElementsAreEqual } from "../../utils/matrix";

const PLAYER_MOVE = 'tic-tac-toe/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe/INITIALIZE';

export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} })
export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} })

const players = {
  x: 'X',
  o: 'O',
}

const finishResult = {
  draw: 1, xWin: 2, oWin: 3
}

export const reducer = (state, action = {}) => {
  switch (action.type) {

    case INITIALIZE:
      const {gameSize, firstPlayer} = action.payload;
      const matrix = createNullMatrix(gameSize);
      const nextPlayer = firstPlayer;
      return {matrix, gameSize, nextPlayer};
    
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
  for (let curIndex = 0; curIndex < matrix.length; curIndex++) {
    const row = matrix[curIndex];
    if(allElementsAreEqual(row))
      return {isWin: true, winner: row[0]}    
  }
}