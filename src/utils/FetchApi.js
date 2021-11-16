const URLS = {
  bebida: {
    ingredients: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    first: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    list: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=',
    lookup: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
    category: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
  },
  comida: {
    ingredients: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    first: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    list: 'https://www.themealdb.com/api/json/v1/1/list.php?c=',
    lookup: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    category: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  },
};

const fetchApi = async (
  { recipeType = 'comida', filterType = 'name', searchInput = '' } = {},
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
