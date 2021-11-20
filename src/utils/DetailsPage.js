import fetchApi from './FetchApi';

export const getIngredientsOrMeasures = (request, recipe) => {
  const allInformation = Object.entries(recipe);
  const requestedInfo = allInformation.filter((info) => (
    info[0].includes(request) && info[1]
  ));
  return requestedInfo.map((array) => array[1]);
};

export const fetchRecipeById = async (recipeId, recipeType) => {
  const data = await fetchApi({
    recipeType,
    filterType: 'lookup',
    searchInput: recipeId,
  });
  const recipeInfo = Object.values(data)[0][0];
  return (
    { ...recipeInfo,
      ingredients: getIngredientsOrMeasures('Ingredient', recipeInfo),
      measures: getIngredientsOrMeasures('Measure', recipeInfo),
    }
  );
};

export const fetchRecommendedRecipes = async (recipeId, recipeType) => {
  const data = await fetchApi({ recipeType });
  return Object.values(data)[0];
};

export const treatVideoUrl = (url) => {
  const hash = url.split('=').pop();
  return `https://www.youtube.com/embed/${hash}`;
};
