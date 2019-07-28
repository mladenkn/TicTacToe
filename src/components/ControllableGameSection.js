import React, { Fragment, } from 'react';
import GameSectionPresenter from './GameSection';
import PropTypes from 'prop-types';
import GameRestartDialog from './GameRestartDialog';
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
      <Dialog open={currentRound.isGameOver}>   
        <GameRestartDialog 
          onAccept={({gameSize}) => onStartNewRound(gameSize)} 
          onGoBack={onGoBack}
          outcome={currentRound.outcome}
        />
      </Dialog>    
    </Fragment> :
    <Fragment />
});

ControllableGameSection.propTypes = {
  gameSize: PropTypes.number,
  onGoBack: PropTypes.func,
};

export default ControllableGameSection;