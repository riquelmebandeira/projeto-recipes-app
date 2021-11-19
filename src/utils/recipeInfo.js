import { getIngredientsOrMeasures } from './DetailsPage';

export const API_KEYS = {
  bebida: {
    base: 'Drink',
    id: 'idDrink',
    thumb: 'strDrinkThumb',
    title: 'strDrink',
    category: 'strCategory',
    area: 'strArea',
    alcoholic: 'strAlcoholic',
    inProgress: 'cocktails',
  },
  comida: {
    base: 'Meal',
    id: 'idMeal',
    thumb: 'strMealThumb',
    title: 'strMeal',
    category: 'strCategory',
    area: 'strArea',
    inProgress: 'meals',
  },
};

// pega 'comida' ou 'bebida' (no singular!) com base na URL
export function getRecipeType() {
  return window.location.href.includes('comida') ? 'comida' : 'bebida';
}

export const getRecipeURL = (id) => (
  `${window.location.origin}/${getRecipeType()}s/${id}`
);

export const convertRecipe = (apiRecipe, recipeType) => ({
  id: apiRecipe[API_KEYS[recipeType].id],
  type: recipeType,
  area: apiRecipe[API_KEYS[recipeType].area] || '',
  category: apiRecipe[API_KEYS[recipeType].category],
  alcoholicOrNot: apiRecipe[API_KEYS[recipeType].alcoholic] || '',
  name: apiRecipe[API_KEYS[recipeType].title],
  image: apiRecipe[API_KEYS[recipeType].thumb],
  ingredients: getIngredientsOrMeasures('Ingredient', apiRecipe),
  measures: getIngredientsOrMeasures('Measure', apiRecipe),
});
