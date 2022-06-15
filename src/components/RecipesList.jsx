import PropTypes from 'prop-types';
import React from 'react';
import { API_KEYS, getRecipeType } from '../utils/recipeInfo';
import RecipeCard from './RecipeCard';
import Loading from './Loading';

function RecipesList({ recipes }) {
  const recipeType = getRecipeType();

  const recipeKey = API_KEYS[recipeType].base;

  // verifica se a lista de receitas foi atualizada após redirecionar de comidas para bebidas, e vice-versa.
  const verification = recipes[0] && recipes[0][`id${recipeKey}`];

  return !verification ? <Loading /> : (
    <section className="recipe-list">
      { recipes.map((recipe, recipeIndex) => (
        <RecipeCard
          key={ recipe[`id${recipeKey}`] }
          recipeIndex={ recipeIndex }
          recipeImg={ recipe[`str${recipeKey}Thumb`] }
          recipeName={ recipe[`str${recipeKey}`] }
          recipeType={ recipeType }
          recipeId={ recipe[`id${recipeKey}`] }
        />
      ))}
    </section>
  );
}

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipesList;
