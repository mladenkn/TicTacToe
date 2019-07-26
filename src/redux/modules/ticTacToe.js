import { getMatrixDiagonals, updateMatrixCell, createMatrix, allElementsAreEqual, getMatrixCollumns } from "../../utils";
import flatten from 'flatten';
import { players, cellContent, roundOutcomes } from '../../ticTacToeConstants';

const PLAYER_MOVE = 'tic-tac-toe/PLAYER_MOVE';
const INITIALIZE = 'tic-tac-toe/INITIALIZE';
export const GAME_OVER = 'tic-tac-toe/FINISH';

export const initialize = (gameSize, firstPlayer) => ({ type: INITIALIZE, payload: {gameSize, firstPlayer} });
export const playerMove = (row, col) => ({ type: PLAYER_MOVE, payload: {row, col} });
export const gameOver = (state) => ({ type: GAME_OVER, payload: state });

export const middleware = (state, _, dispatch) => {
  if(state.isGameOver)
    dispatch(gameOver(state));
}

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {

    case INITIALIZE:
      const {gameSize, firstPlayer} = action.payload;
      const matrix = createMatrix(gameSize, gameSize, cellContent.emptyCell);
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

  for (const line of allLines) {
    if(allElementsAreEqual(line)  &&  line[0] !== cellContent.emptyCell){
      let outCome;
      if(line[0] === players.x)
        outCome = roundOutcomes.xWin;
      if(line[0] === players.o)
        outCome = roundOutcomes.oWin;
      console.log(outCome)
      return { isGameOver: true, outCome }
    }
  }
  
  const isMatrixFull = flatten(matrix).every(c => c !== cellContent.emptyCell);
  const outCome = isMatrixFull ? roundOutcomes.matrixFull : undefined;
  console.log(isMatrixFull, outCome);
  return { isGameOver: isMatrixFull, outCome }  
}