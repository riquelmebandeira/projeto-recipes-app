export const fetchIngredients = async (ingredients) => {
  const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
  const response = await fetchApi.json();
  console.log(response);
  return response;
};

export const fetchName = async (name) => {
  const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await fetchApi.json();
  console.log(response);
  return response;
};

export const fetchFirstLetter = async (letter) => {
  const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const response = await fetchApi.json();
  console.log(response);
  return response;
};
