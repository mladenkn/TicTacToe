import React, { useEffect, useContext } from 'react';
import GameSectionPresenter from './GameSection';
import { initialize, players } from '../redux/modules/ticTacToe';
import { connect, ReactReduxContext } from 'react-redux';

export const GameSectionContainer2 = ({gameSize}) => {
  const {store} = useContext(ReactReduxContext);
  const state = store.getState().ticTacToe;
  console.log(state)
  useEffect(() => {
    if(!state.initialized)
      store.dispatch(initialize(gameSize, players.x));
  });
  return state.initialized ?
    <GameSectionPresenter matrix={state.matrix} /> :
    <div />
}

export const GameSectionContainer = connect(
  state => ({state: state.ticTacToe}), dispatch => ({dispatch})
)(({gameSize, state, dispatch}) => {
  useEffect(() => {
    if(!state.initialized)
      dispatch(initialize(gameSize, players.x));
  });
  return state.initialized ?
    <GameSectionPresenter matrix={state.matrix} /> :
    <div />
})

export default GameSectionContainer;