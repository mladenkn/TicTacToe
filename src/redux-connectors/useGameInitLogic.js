import { useDispatch, useSelector } from 'react-redux';
import { initialize as initializeGamePlayers } from '../redux-modules/gamePlayers';
import { isNil } from 'ramda';
import { players } from '../ticTacToeConstants';
import { newRound } from '../redux-modules/gameRounds';

export default ({gameSize, firstPlayer}) => {  
  const dispatch = useDispatch();  
  const init = () => {
    const aiPlayer = firstPlayer === players.x ? players.o : players.x;
    dispatch(newRound(gameSize, firstPlayer));
    dispatch(initializeGamePlayers(firstPlayer, aiPlayer));
  };   
  const inited = useSelector(s => !isNil(s.gameRounds.current) && !isNil(s.gamePlayers));
  return { inited, init };
}