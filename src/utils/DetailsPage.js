export const getIdFromUrl = () => (
  window.location.pathname.split('/').pop());

export const fetchDrinkById = async () => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getIdFromUrl()}`);
  const data = await response.json();
  return data.drinks[0];
};

export const fetchMealById = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getIdFromUrl()}`);
  const data = await response.json();
  return data.meals[0];
};

export const getIngredientsOrMeasures = (request, recipe) => {
  const allInformation = Object.entries(recipe);
  const requestedInfo = allInformation.filter((info) => (
    info[0].includes(request) && info[1]
  ));
  return requestedInfo.map((array) => array[1]);
};

export const treatVideoUrl = (url) => {
  const hash = url.split('=').pop();
  return `https://www.youtube.com/embed/${hash}`;
};
