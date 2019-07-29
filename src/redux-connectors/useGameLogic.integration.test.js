import React from 'react';
import { configureStore } from 'redux-starter-kit'
import gameRounds, { newRound } from '../redux-modules/gameRounds';
import { Provider } from 'react-redux';
import useGameLogic from './useGameLogic';
import { renderHook, act } from '@testing-library/react-hooks'
import { players, cellContent, roundStatus } from '../ticTacToeConstants';

describe('useGameLogic', () => {

  let store;
  let renderedHook;

  beforeEach(() => {
    store = configureStore({
      reducer: { gameRounds },
    });
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
    renderedHook = renderHook(() => useGameLogic(), { wrapper });  
  });

  test('initial', () => {
    store.dispatch(newRound(3, players.x));
    const r = renderedHook.result.current;
    expect(r.playing).toBe(true);
    expect(r.gameOverDialogOpen).toBe(false);
    expect(r.gameOverDialogClosed).toBe(false);
    expect(r.round.status).toBe(roundStatus.playing);
    expect(r.round.gameSize).toBe(3);
    expect(r.round.nextPlayer).toBe(players.x);
    expect(r.round.matrix.length).toBe(3);
  });

  test('cell updates on click', () => {
    store.dispatch(newRound(3, players.x));
    let r = renderedHook.result.current;
    act(() => {
      r.onMatrixCellClick({row: 1, col: 2});
    });

    r = renderedHook.result.current;
    expect(r.playing).toBe(true);
    expect(r.gameOverDialogOpen).toBe(false);
    expect(r.gameOverDialogClosed).toBe(false);
    expect(r.round.status).toBe(roundStatus.playing);
    expect(r.round.nextPlayer).toBe(players.o);
    expect(r.round.matrix[1][2]).toBe(cellContent.x);
  });
});