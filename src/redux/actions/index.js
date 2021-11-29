import fetchApi from '../../utils/FetchApi';
import { API_KEYS } from '../../utils/recipeInfo';

// export const GET_USER_LS_DATA = 'GET_LS_DATA';
export const SAVE_USER_LS_DATA = 'SAVE_USER_LS_DATA';
export const SAVE_RECIPES_LS_DATA = 'SAVE_RECIPES_LS_DATA';

export const SAVE_RECIPE_LIST = 'SAVE_RECIPE_LIST';
const userLsKeys = ['user', 'mealsToken', 'cocktailsToken'];
const recipesLsKeys = ['doneRecipes', 'favoriteRecipes', 'inProgressRecipes'];
const lsKeys = [...userLsKeys, ...recipesLsKeys];

const getLsData = (keys) => keys.reduce((data, key) => {
  if (localStorage.getItem(key) === null) { return data; }
  return ({ ...data, [key]: JSON.parse(localStorage.getItem(key)) });
}, {});

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

export const saveRecipesList = (data) => ({
  type: SAVE_RECIPE_LIST,
  data,
});

export const getRecipes = (
  { filterType = 'name', searchInput = '', recipeType = 'comida' } = {},
) => async (dispatch) => {
  // setLoading(true);
  const response = await fetchApi({
    recipeType,
    filterType,
    searchInput,
  });
  dispatch(saveRecipesList(Object.values(response)[0]));
  // setLoading(false);
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
    if (localStorage.getItem(key) === null && (localStorage.getItem('user') !== null)) {
      saveLsData({ [key]: getState().user[key] });
    } else {
      dispatch({
        type: SAVE_USER_LS_DATA,
        data: getLsData([key]),
      });
    }
  });
  recipesLsKeys.forEach((key) => {
    if (localStorage.getItem(key) === null) {
      saveLsData({ [key]: getState().recipes[key] });
    } else {
      dispatch({
        type: SAVE_RECIPES_LS_DATA,
        data: getLsData([key]),
      });
    }
  });
};

export const loginUser = (user) => (dispatch) => {
  dispatch(saveUserLsData({ user, mealsToken: 1, cocktailsToken: 1 }));
  // dispatch(initLsData());
};

// export const loadLsData = () => (dispatch) => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   if (user !== null) {
//     dispatch(getUserLsData());
//     dispatch(getRecipesLsData());
//   }
// };

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
          [recipeId]: steps,
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

const saveDate = () => {
  const data = new Date();
  const day = String(data.getDate()).padStart(2, '0');
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const year = data.getFullYear();
  const dataAtual = `${day}/${month}/${year}`;
  return dataAtual;
};

export const addDoneRecipe = (
  { name, image, tags, category, type, id, area, alcoholicOrNot },
) => (dispatch, getState) => {
  const { doneRecipes } = getState().recipes;
  const recipe = {
    name, image, tags, category, type, id, area, alcoholicOrNot, doneDate: saveDate(),
  };

  dispatch(saveRecipesLsData({ doneRecipes: [...doneRecipes, recipe] }));
};
