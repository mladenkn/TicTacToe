import React, { Fragment, useState } from 'react';
import GameSection from './GameSection';
import PropTypes from 'prop-types';
import GameRestartDialog from './GameRestartDialog';
import { Dialog } from '@material-ui/core';
import useTicTacToe from '../redux/connectors/useTicTacToe';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useLogic = (gameSize) => {
  const wrapped = useTicTacToe(gameSize);
  const [userClosedDialog, setUserClosedDialog] = useState(false);
  return {
    noContent: !wrapped.roundInitialized, 
    playing: wrapped.roundInitialized && !wrapped.gameOver,
    gameOverDialogOpen: wrapped.roundInitialized && wrapped.gameOver,
    gameOverDialogClosed: userClosedDialog,
    onCloseDialog: () => setUserClosedDialog(true),
    round: wrapped.currentRound,
    onMatrixCellClick: wrapped.onCellClick,
    resultHistory: wrapped.resultHistory,
  };
}

const MainContent = styled.div`
  display: flex;
`

const BackButton = styled(IconButton)`
  && {
    height: 2em;
    padding: 0.5em;
    margin-right: 0.55em;
  }
`

export const ControllableGameSection = (({gameSize, onGoBack}) => {

  const { noContent, playing, gameOverDialogOpen, onCloseDialog, round,
    onMatrixCellClick, resultHistory, gameOverDialogClosed } = useLogic(gameSize);

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
            onAccept={() => {}}
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
};

export default ControllableGameSection;