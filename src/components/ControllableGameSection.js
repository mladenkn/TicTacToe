import React, { Fragment, useState } from 'react';
import GameSection from './GameSection';
import PropTypes from 'prop-types';
import GameRestartDialog from './GameRestartDialog';
import { Dialog } from '@material-ui/core';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { selectResultHistory } from '../redux/modules/gameRounds';
import { playerMove } from '../redux/modules/gameRound';

const useLogic = () => {
  
  const { current: currentRound, history } = useSelector(s => s.gameRounds);  
  const resultHistory = selectResultHistory(history);
  
  const dispatch = useDispatch();
  const onCellClick = ({row, col}) => dispatch(playerMove(row, col));

  const [userClosedDialog, setUserClosedDialog] = useState(false);

  return {
    playing: !currentRound.isGameOver,
    gameOverDialogOpen: currentRound.isGameOver && userClosedDialog,
    gameOverDialogClosed: userClosedDialog,
    onCloseDialog: () => setUserClosedDialog(true),
    round: currentRound,
    onMatrixCellClick: onCellClick,
    resultHistory,
  };
}

const MainContent = styled.div`
  display: flex;
`;

const BackButton = styled(IconButton)`
  && {
    height: 2em;
    padding: 0.5em;
    margin-right: 0.55em;
  }
`;

export const ControllableGameSection = (({onGoBack, onRestart}) => {

  const { noContent, playing, gameOverDialogOpen, onCloseDialog, round,
    onMatrixCellClick, resultHistory, gameOverDialogClosed } = useLogic();

  const mainContent = (
    <MainContent>
      <BackButton onClick={onGoBack}><ArrowBackIcon /></BackButton>
      <GameSection 
        nextPlayer={round.nextPlayer} 
        onCellClick={onMatrixCellClick}
        matrix={round.matrix} 
        resultHistory={resultHistory} 
      />
    </MainContent>
  );
 
  if(noContent)
    return <Fragment />;

  else if(playing)
    return <Fragment>{mainContent}</Fragment>;
  
  else if(gameOverDialogOpen)
    return (
      <Fragment>
        {mainContent}
        <Dialog open={true}>
          <GameRestartDialog 
            onCancel={onCloseDialog}
            onAccept={onRestart}
            outcome={round.outcome}
          />
        </Dialog> 
      </Fragment>
    );

  else if(gameOverDialogClosed)
    return <Fragment>{mainContent}</Fragment>;
  
  else 
    throw new Error();
});

ControllableGameSection.propTypes = {
  gameSize: PropTypes.number,
  onGoBack: PropTypes.func,
  onRestart: PropTypes.func,
};

export default ControllableGameSection;