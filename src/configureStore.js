import { configureStore } from 'redux-starter-kit'
import { createLogger } from 'redux-logger';
import gameRounds from './redux-modules/gameRounds';
import * as gameAIPlayer from './redux-modules/gameAIPlayer';

export default (preloadedState = undefined) => {
  const store = configureStore({
    reducer: {
      gameRounds,
      gameAIPlayer: gameAIPlayer.reducer,
    },
    middleware: [
      createLogger()
    ],
    preloadedState
  });

  store.subscribe(() => gameAIPlayer.stateChangeSubscriber(store.getState(), store.dispatch))

  return store;
};