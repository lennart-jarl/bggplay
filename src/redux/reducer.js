import { FILTER, RESTORE } from './types';
import { gameData } from "../data";

const INITIAL_STATE = {
  data: gameData.filter(it => it.isExpansion === false),
  filters: [1,2,3,4,5,6],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FILTER: {
      const data = gameData.filter(function (currentElement) {
        return currentElement.isExpansion === false
          && currentElement.maxPlayers >= action.payload
          && currentElement.minPlayers <= action.payload;
      });
    
      return {
        ...state, data,
      };
    }

    case RESTORE: {
      const data = gameData.filter(it => it.isExpansion === false);
      return {
        ...state, data,
      };
    }
    default: return state;
  }
};

export default reducer;