const INITIALIZE = 'game-players/INITIALIZE';

export const initialize = (appUserPlayerName, AIPlayerName) => 
  ({ type: INITIALIZE, payload: {AIPlayerName, appUserPlayerName} });

export const reducer = (state = null, action) => {
  switch(action.type){
    case INITIALIZE:
      return action.payload
    default:
      return state;
  }
}

export default reducer;