import { SAVE_RECIPES_LS_DATA, SAVE_RECIPE_LIST } from '../actions';

const INITIAL_STATE = {
  doneRecipes: [],
  favoriteRecipes: [],
  recipeList: [],
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
  case SAVE_RECIPE_LIST:
    return {
      ...state,
      recipeList: action.data,
    };
  default: return state;
  }
};

export default recipesReducer;
