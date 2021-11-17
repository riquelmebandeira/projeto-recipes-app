import { API_KEYS } from '../../utils/recipeInfo';

// export const GET_USER_LS_DATA = 'GET_LS_DATA';
export const SAVE_USER_LS_DATA = 'SAVE_USER_LS_DATA';
export const SAVE_RECIPES_LS_DATA = 'SAVE_RECIPES_LS_DATA';

const userLsKeys = ['user', 'mealsToken', 'cocktailsToken'];
const recipesLsKeys = ['doneRecipes', 'favoriteRecipes', 'inProgressRecipes'];
const lsKeys = [...userLsKeys, ...recipesLsKeys];

const getLsData = (keys) => keys.reduce((data, key) => ({
  ...data, [key]: JSON.parse(localStorage.getItem(key)),
}), {});

export const getUserLsData = () => ({
  type: SAVE_USER_LS_DATA,
  data: getLsData(userLsKeys),
});

export const getRecipesLsData = () => ({
  type: SAVE_RECIPES_LS_DATA,
  data: getLsData(recipesLsKeys),
});

const saveLsData = (data) => {
  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
};

const saveUserLsData = (data) => {
  saveLsData(data);
  return {
    type: SAVE_USER_LS_DATA,
    data,
  };
};

export const clearLsData = () => {
  lsKeys.forEach((keys) => localStorage.clear(keys));
};

export const saveRecipesLsData = (data) => {
  saveLsData(data);
  return {
    type: SAVE_RECIPES_LS_DATA,
    data,
  };
};

export const initLsData = () => (dispatch, getState) => {
  userLsKeys.forEach((key) => {
    saveLsData({ [key]: getState().user[key] });
  });
  recipesLsKeys.forEach((key) => {
    saveLsData({ [key]: getState().recipes[key] });
  });
};

export const loginUser = (user) => (dispatch) => {
  dispatch(saveUserLsData({ user }));
  dispatch(initLsData());
};

export const loadLsData = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user !== null) {
    dispatch(getUserLsData());
    dispatch(getRecipesLsData());
  }
};

export const updateRecipeInProgress = ({ recipeType, recipeId, steps }) => (
  (dispatch, getState) => {
    const previousData = getState().recipes.inProgressRecipes;
    const updatingKey = API_KEYS[recipeType].inProgress;

    // reconstructing data from previous state
    const newData = {
      inProgressRecipes: {
        ...previousData,
        [updatingKey]: {
          ...previousData[updatingKey],
          [recipeId]: { steps },
        },
      },
    };

    dispatch(saveRecipesLsData(newData));
  }
);

export const toggleFavoriteRecipe = (recipe) => (
  (dispatch, getState) => {
    const { favoriteRecipes } = getState().recipes;
    if (favoriteRecipes.some(({ id }) => id === recipe.id)) {
      dispatch(saveRecipesLsData({
        favoriteRecipes: [
          ...favoriteRecipes.filter(({ id }) => (id !== recipe.id)),
        ],
      }));
    } else {
      const { id, area, category, alcoholicOrNot, name, image, type } = recipe;
      dispatch(saveRecipesLsData({
        favoriteRecipes: [
          ...favoriteRecipes,
          { id, area, category, alcoholicOrNot, name, image, type },
        ],
      }));
    }
  }
);
