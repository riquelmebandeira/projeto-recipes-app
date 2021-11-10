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
  default: return state;
  }
};

export default recipesReducer;
