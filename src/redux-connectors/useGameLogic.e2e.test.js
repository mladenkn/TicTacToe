import React from 'react';
import { configureStore } from 'redux-starter-kit'
import gameRounds, { newRound } from '../redux-modules/gameRounds';
import { Provider } from 'react-redux';
import useGameLogic from './useGameLogic';
import { renderHook, act } from '@testing-library/react-hooks'
import { players, roundStatus } from '../ticTacToeConstants';

describe('useGameLogic e2e', () => {

  let store;
  let renderedHook;

  beforeEach(() => {
    store = configureStore({
      reducer: { gameRounds },
    });
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
    renderedHook = renderHook(() => useGameLogic(), { wrapper });  
  });

  test('x win', () => {
    store.dispatch(newRound(3, players.x));
    
    let r = renderedHook.result.current;    
    act(() => { r.onMatrixCellClick({ row: 0, col: 0 }); });
    act(() => { r.onMatrixCellClick({ row: 1, col: 0 }); });
    act(() => { r.onMatrixCellClick({ row: 1, col: 1 }); });
    act(() => { r.onMatrixCellClick({ row: 1, col: 2 }); });
    act(() => { r.onMatrixCellClick({ row: 2, col: 2 }); });

    r = renderedHook.result.current;
    expect(r.round.status).toBe(roundStatus.xWin);
    expect(r.playing).toBe(false);
    expect(r.gameOverDialogOpen).toBe(true);
    expect(r.gameOverDialogClosed).toBe(false);

    act(() => r.onCloseDialog());
    
    r = renderedHook.result.current;
    expect(r.playing).toBe(false);
    expect(r.gameOverDialogOpen).toBe(false);
    expect(r.gameOverDialogClosed).toBe(true);    
  });

  test('matrix full', () => {
    store.dispatch(newRound(3, players.x));
    
    let r = renderedHook.result.current;    
    act(() => { r.onMatrixCellClick({ row: 0, col: 0 }); });
    act(() => { r.onMatrixCellClick({ row: 1, col: 0 }); });
    act(() => { r.onMatrixCellClick({ row: 1, col: 2 }); });
    act(() => { r.onMatrixCellClick({ row: 1, col: 1 }); });
    act(() => { r.onMatrixCellClick({ row: 2, col: 0 }); });
    act(() => { r.onMatrixCellClick({ row: 0, col: 1 }); });
    act(() => { r.onMatrixCellClick({ row: 0, col: 2 }); });
    act(() => { r.onMatrixCellClick({ row: 2, col: 2 }); });
    act(() => { r.onMatrixCellClick({ row: 2, col: 1 }); });

    r = renderedHook.result.current;
    expect(r.playing).toBe(false);
    expect(r.gameOverDialogOpen).toBe(true);
    expect(r.gameOverDialogClosed).toBe(false);  
    expect(r.round.status).toBe(roundStatus.matrixFull); 
  });
});