import { SAVE_RECIPES_LS_DATA } from '../actions';

const INITIAL_STATE = {
  doneRecipes: [],
  favoriteRecipes: [],
  inProgressRecipes: {
    cocktails: {},
    meals: {},
  },
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_RECIPES_LS_DATA:
    return {
      ...state,
      ...action.data,
    };
  default: return state;
  }
};

export default recipesReducer;
