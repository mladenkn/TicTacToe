import { createMiddleware } from "../../utils/redux";
import { selectAvailableCells } from './gameRound';

export const middleware = (playerName) => createMiddleware((state, action, dispatch) => {
  if(state.gameRounds.current.nextPlayer === playerName){
  }    
});