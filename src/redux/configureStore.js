import { configureStore } from 'redux-starter-kit'
import { createLogger } from 'redux-logger';
import gameRounds from './modules/gameRounds';

export default (preloadedState = undefined) => configureStore({
  reducer: {
    gameRounds,
  },
  middleware: [
    createLogger()
  ],
  preloadedState
});