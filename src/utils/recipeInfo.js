import { getIngredientsOrMeasures } from './DetailsPage';

export const API_KEYS = {
  bebidas: {
    id: 'idDrink',
    thumb: 'strDrinkThumb',
    title: 'strDrink',
    category: 'strCategory',
    area: 'strArea',
    alcoholic: 'strAlcoholic',
  },
  comidas: {
    id: 'idMeal',
    thumb: 'strMealThumb',
    title: 'strMeal',
    category: 'strCategory',
    area: 'strArea',
  },
};

export const getRecipeType = () => window.location.href.split('/')[3];

export const getRecipeURL = (id) => (
  `${window.location.origin}/${getRecipeType()}/${id}`
);

const LAST = -1;

export const convertRecipe = (apiRecipe, recipeType) => ({
  id: apiRecipe[API_KEYS[recipeType].id],
  type: recipeType.slice(0, LAST), // singular!
  area: apiRecipe[API_KEYS[recipeType].area],
  category: apiRecipe[API_KEYS[recipeType].category],
  alcoholicOrNot: recipeType === 'comidas'
    ? '' : apiRecipe[API_KEYS[recipeType].alcoholic],
  name: apiRecipe[API_KEYS[recipeType].title],
  image: apiRecipe[API_KEYS[recipeType].thumb],
  ingredients: getIngredientsOrMeasures('Ingredient', apiRecipe),
  measures: getIngredientsOrMeasures('Measure', apiRecipe),
});
