export const MAX_LENGTH = 6;
export const RECIPE_ID = window.location.pathname.split('/').pop();
const RECIPE_TYPE = window.location.pathname.includes('comidas') ? 'meals' : 'drinks';
export const isMeal = RECIPE_TYPE === 'meals';

const URLS = {
  mealById: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RECIPE_ID}`,
  drinkById: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${RECIPE_ID}`,
  allMeals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  allDrinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
};

export const getIngredientsOrMeasures = (request, recipe) => {
  const allInformation = Object.entries(recipe);
  const requestedInfo = allInformation.filter((info) => (
    info[0].includes(request) && info[1]
  ));
  return requestedInfo.map((array) => array[1]);
};

export const fetchRecipeById = async () => {
  const url = isMeal ? URLS.mealById : URLS.drinkById;
  const response = await fetch(url);
  const data = await response.json();
  const recipeInfo = Object.values(data)[0][0];
  return (
    { ...recipeInfo,
      ingredients: getIngredientsOrMeasures('Ingredient', recipeInfo),
      measures: getIngredientsOrMeasures('Measure', recipeInfo),
    }
  );
};

export const fetchRecommendedRecipes = async () => {
  const url = !isMeal ? URLS.allMeals : URLS.allDrinks;
  const response = await fetch(url);
  const data = await response.json();
  return Object.values(data)[0];
};

export const treatVideoUrl = (url) => {
  const hash = url.split('=').pop();
  return `https://www.youtube.com/embed/${hash}`;
};

export const isDone = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const result = doneRecipes && doneRecipes.find((recipe) => recipe.id === RECIPE_ID);
  return !!result;
};

export const isInProgress = () => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressRecipes && isMeal) {
    return inProgressRecipes.hasOwnProperty.call(inProgressRecipes.meals, RECIPE_ID);
  }
  if (inProgressRecipes && !isMeal) {
    return inProgressRecipes.hasOwnProperty.call(
      inProgressRecipes.cocktails, RECIPE_ID,
    );
  }
};
