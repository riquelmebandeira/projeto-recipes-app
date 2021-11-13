import React from 'react';

export const MAX_LENGTH = 6;

export const fetchRecipeById = async () => {
  const RECIPE_TYPE = window.location.pathname.includes('comidas') ? 'meals' : 'drinks';
  const RECIPE_ID = window.location.pathname.split('/').pop();
  const url = RECIPE_TYPE === 'meals' ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${RECIPE_ID}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${RECIPE_ID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[RECIPE_TYPE][0];
};

export const fetchRecommendedRecipes = async () => {
  const INVERSED_TYPE = window.location.pathname.includes('comidas') ? 'drinks' : 'meals';
  const url = INVERSED_TYPE === 'meals' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  return data[INVERSED_TYPE];
};

export const getIngredientsOrMeasures = (request, recipe) => {
  const allInformation = Object.entries(recipe);
  const requestedInfo = allInformation.filter((info) => (
    info[0].includes(request) && info[1]
  ));
  return requestedInfo.map((array) => array[1]);
};

export const getFormattedIngredients = (recipe) => {
  const ingredients = getIngredientsOrMeasures('Ingredient', recipe);
  const measures = getIngredientsOrMeasures('Measure', recipe);
  return ingredients.map((ingredient, index) => (
    <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
      {`${ingredient} - ${measures[index]}`}
    </li>
  ));
};

export const treatVideoUrl = (url) => {
  const hash = url.split('=').pop();
  return `https://www.youtube.com/embed/${hash}`;
};
