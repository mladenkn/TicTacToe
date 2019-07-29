import { useState } from 'react';
import { selectResultHistory } from '../redux-modules/gameRounds';
import { playerMove } from '../redux-modules/gameRound';
import { useDispatch, useSelector } from 'react-redux';
import { roundStatus } from '../ticTacToeConstants';

export default () => {
  
  const { current: currentRound, history } = useSelector(s => s.gameRounds);  
  const resultHistory = selectResultHistory(history);
  
  const dispatch = useDispatch();
  const onCellClick = ({row, col}) => dispatch(playerMove(row, col));

  const [userClosedDialog, setUserClosedDialog] = useState(false);

  const playing = currentRound.status === roundStatus.playing

  return {
    playing,
    gameOverDialogOpen: !playing && !userClosedDialog,
    gameOverDialogClosed: userClosedDialog,
    onCloseDialog: () => setUserClosedDialog(true),
    round: currentRound,
    onMatrixCellClick: onCellClick,
    resultHistory,
  };
}