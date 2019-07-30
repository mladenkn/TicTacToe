import React, { Fragment } from 'react';
import GameSection from './GameSection';
import PropTypes from 'prop-types';
import GameRestartDialog from './GameRestartDialog';
import { Dialog } from '@material-ui/core';
import styled from 'styled-components';
import { players, roundStatus, cellContent } from '../ticTacToeConstants';

const MainContent = styled.div`
`;

export const ControllableGameSection = (({onRestart, className, width, gameLogic}) => {

  const { playing, gameOverDialogOpen, onCloseDialog, round,
    onMatrixCellClick, resultHistory, gameOverDialogClosed } = gameLogic;
 
  const mainContent = (
    <MainContent className={className}>
      <GameSection 
        nextPlayer={round.nextPlayer} 
        onCellClick={e => playing && onMatrixCellClick(e)}
        matrix={round.matrix} 
        resultHistory={resultHistory} 
        width={width}
      />
    </MainContent>
  );

  if(playing)
    return <Fragment>{mainContent}</Fragment>;
  
  else if(gameOverDialogOpen)
    return (
      <Fragment>
        {mainContent}
        <Dialog open={true}>
          <GameRestartDialog 
            onCancel={onCloseDialog}
            onAccept={onRestart}
            status={round.status}
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
  onRestart: PropTypes.func.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOf(['small', 'medium']),
  gameLogic: PropTypes.shape({
    playing: PropTypes.bool,
    gameOverDialogOpen: PropTypes.bool,
    gameOverDialogClosed: PropTypes.bool,
    onCloseDialog: PropTypes.func.isRequired,
    round: PropTypes.shape({
      matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf(Object.values(cellContent)))),
      status: PropTypes.oneOf(Object.values(roundStatus)),
      nextPlayer: PropTypes.oneOf(Object.values(players)),
    }),
    onMatrixCellClick: PropTypes.func.isRequired,
    resultHistory: PropTypes.shape({
      xWinCount: PropTypes.number,
      oWinCount: PropTypes.number,
      matrixFullCount: PropTypes.number,
    }),
  }),
};

export default ControllableGameSection;