import React, { useEffect, Fragment } from 'react';
import GameSectionPresenter from './GameSection';
import { initialize, playerMove } from '../redux/modules/ticTacToe';
import { players } from '../ticTacToeConstants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectResultHistory } from '../redux/modules/ticTacToeRoundHistory';
import GameRestartDialog from './GameRestartDialog';
import { Dialog } from '@material-ui/core';

export const GameSectionContainer = connect(
  state => ({state: state}), dispatch => ({dispatch})
)(({gameSize, state, dispatch}) => {
  useEffect(() => {
    if(!state.ticTacToe.initialized)
      dispatch(initialize(gameSize, players.x));
  });
  const resultHistory = selectResultHistory(state.ticTacToeRoundHistory);

  return state.ticTacToe.initialized ?
    <Fragment>
      <GameSectionPresenter 
        nextPlayer={state.ticTacToe.nextPlayer} 
        onCellClick={({row, col}) => dispatch(playerMove(row, col))} 
        matrix={state.ticTacToe.matrix} 
        resultHistory={resultHistory} 
      />
      <Dialog open={true}>        
        <GameRestartDialog outCome='x win' onAccept={() => {}} onCancel={() => {}} />
      </Dialog>
    </Fragment> :
    <Fragment />
});

GameSectionContainer.propTypes = {
  gameSize: PropTypes.number
};

export default GameSectionContainer;