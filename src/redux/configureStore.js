import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import ticTacToeRounds from './modules/ticTacToeRounds';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);

const reducer = combineReducers({
  ticTacToeRounds,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;  