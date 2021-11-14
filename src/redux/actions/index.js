// export const GET_USER_LS_DATA = 'GET_LS_DATA';
export const SAVE_USER_LS_DATA = 'SAVE_USER_LS_DATA';
export const SAVE_RECIPES_LS_DATA = 'SAVE_RECIPES_LS_DATA';

const userLsKeys = ['user', 'mealsToken', 'cocktailsToken'];
const recipesLsKeys = ['doneRecipes', 'favoriteRecipes', 'inProgressRecipes'];

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

export const saveRecipesLsData = (data) => {
  saveLsData(data);
  return {
    type: SAVE_RECIPES_LS_DATA,
    data,
  };
};

export const initLsData = () => (dispatch, getState) => {
  userLsKeys.forEach((key) => {
    if (localStorage.getItem(key) === null) {
      saveLsData({ [key]: getState().user[key] });
    } else {
      dispatch(getUserLsData());
    }
  });
  recipesLsKeys.forEach((key) => {
    if (localStorage.getItem(key) === null) {
      saveLsData({ [key]: getState().recipes[key] });
    } else {
      dispatch(getRecipesLsData());
    }
  });
};

export const loginUser = (user) => {
  saveUserLsData({ user });
  return saveUserLsData({ user });
};

export const updateRecipeInProgress = ({ recipeType, recipeId, steps }) => (
  (dispatch, getState) => {
    const previousData = getState().recipes.inProgressRecipes;
    const updatingKey = recipeType === 'bebidas' ? 'cocktails' : 'meals';

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
