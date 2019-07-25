export const createMiddleware = (moduleName, func) => {
  return store => next => action => {
    const state = store.getState()[moduleName];
    func(state, action, store.dispatch);
    return next(action);
  }
}