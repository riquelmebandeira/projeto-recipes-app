export const API_KEYS = {
  bebidas: {
    id: 'idDrink',
    thumb: 'strDrinkThumb',
    title: 'strDrink',
    category: 'strCategory',
  },
  comidas: {
    id: 'idMeal',
    thumb: 'strMealThumb',
    title: 'strMeal',
    category: 'strCategory',
  },
};

const URLS = {
  bebidas: {
    ingredients: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    first: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    list: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=',
    lookup: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
  },
  comidas: {
    ingredients: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    first: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    list: 'https://www.themealdb.com/api/json/v1/1/list.php?c=',
    lookup: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
  },
};

const fetchApi = async (
  { recipeType = 'comidas', filterType = 'name', searchInput = '' } = {},
) => {
  if (searchInput.length > 1 && filterType === 'first') {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    const response = await fetch(`${URLS[recipeType][filterType]}${searchInput}`);
    const json = await response.json();
    return json;
  }
};

export default fetchApi;
