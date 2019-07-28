import { useEffect } from 'react';
import { playerMove } from '../modules/ticTacToeRound';
import { players } from '../../ticTacToeConstants';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'ramda';
import { newRound, selectResultHistory } from '../modules/ticTacToeRounds';

export default (gameSize) => {

  const state = useSelector(s => s.ticTacToeRounds);
  const dispatch = useDispatch();
  
  const currentRound = state.current;
  const roundInitialized = !isEmpty(currentRound);
  const resultHistory = selectResultHistory(state.history);
  const startNewRound = (gameSize) => dispatch(newRound(gameSize, players.x));
  const onCellClick = ({row, col}) => dispatch(playerMove(row, col));

  useEffect(() => {
    if(!roundInitialized)
      startNewRound(gameSize);
  });

  return { currentRound, roundInitialized, resultHistory, onStartNewRound: startNewRound, onCellClick }
}