import { useDispatch, useSelector } from 'react-redux';
import { initialize as initializeGameAIPlayer } from '../redux-modules/gameAIPlayer';
import { isNil } from 'ramda';
import { players } from '../ticTacToeConstants';
import { newRound } from '../redux-modules/gameRounds';

export default ({gameSize, userPlayer}) => {  
  const dispatch = useDispatch();  
  const init = () => {
    const aiPlayer = userPlayer === players.x ? players.o : players.x;
    dispatch(newRound(gameSize, userPlayer));
    dispatch(initializeGameAIPlayer(aiPlayer));
  };   
  const inited = useSelector(s => !isNil(s.gameRounds.current) && !isNil(s.gameAIPlayer));
  return { inited, init };
}