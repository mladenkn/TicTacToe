import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import gameRounds from './modules/gameRounds';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);

const reducer = combineReducers({
  gameRounds,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;  