import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import * as ticTacToe from './modules/ticTacToe';
import * as ticTacToeRoundHistory from './modules/ticTacToeRoundHistory';
import {createMiddleware} from '../utils/redux';

const createStoreWithMiddleware = applyMiddleware(
  createLogger(),
  createMiddleware('ticTacToe', ticTacToe.middleware),
)(createStore);

const reducer = combineReducers({
  ticTacToeRoundHistory: ticTacToeRoundHistory.reducer,
  ticTacToe: ticTacToe.reducer,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;  