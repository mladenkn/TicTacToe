import React, { useEffect, Fragment, } from 'react';
import GameSectionPresenter from './GameSection';
import { playerMove } from '../redux/modules/ticTacToeRound';
import { players } from '../ticTacToeConstants';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { newRound, selectResultHistory } from '../redux/modules/ticTacToeRounds';
import GameRestartDialogContent from './GameRestartDialog';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import { isEmpty } from 'ramda';

const useGameSectionLogic = (gameSize) => {

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

export const ControllableGameSection = (({gameSize, onGoBack}) => {

  const { currentRound, roundInitialized, resultHistory, onStartNewRound, onCellClick } = 
    useGameSectionLogic(gameSize);

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

const StyledGameRestartDialogContent = styled(GameRestartDialogContent)`
  padding: 0.5em 1.5em 0 1.5em;
`

export const GameRestartDialog = (p) => 
  <Dialog open={p.open}>    
    <StyledGameRestartDialogContent {...p} />
  </Dialog>

ControllableGameSection.propTypes = {
  gameSize: PropTypes.number,
  onGoBack: PropTypes.func,
};

export default ControllableGameSection;