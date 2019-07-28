import React, { Fragment, } from 'react';
import GameSectionPresenter from './GameSection';
import PropTypes from 'prop-types';
import GameRestartDialogContent from './GameRestartDialog';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import useTicTacToe from '../redux/connectors/useTicTacToe';

export const ControllableGameSection = (({gameSize, onGoBack}) => {

  const { currentRound, roundInitialized, resultHistory, onStartNewRound, onCellClick } = 
    useTicTacToe(gameSize);

  return roundInitialized ?
    <Fragment>
      <GameSectionPresenter 
        nextPlayer={currentRound.nextPlayer} 
        onCellClick={onCellClick}
        matrix={currentRound.matrix} 
        resultHistory={resultHistory} 
      />
      <GameRestartDialog 
        onAccept={({gameSize}) => onStartNewRound(gameSize)} 
        onGoBack={onGoBack}
        open={currentRound.isGameOver} 
      />
    </Fragment> :
    <Fragment />
});

export const GameRestartDialog = (p) => 
  <Dialog open={p.open}>    
    <GameRestartDialogContent {...p} />
  </Dialog>

ControllableGameSection.propTypes = {
  gameSize: PropTypes.number,
  onGoBack: PropTypes.func,
};

export default ControllableGameSection;