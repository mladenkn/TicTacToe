export const createMiddleware = (func) => {
  return store => next => action => {
    const state = store.getState();
    func(state, action, store.dispatch);
    return next(action);
  }
}