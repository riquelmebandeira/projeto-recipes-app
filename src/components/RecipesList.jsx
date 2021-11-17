import PropTypes from 'prop-types';
import React from 'react';
import { API_KEYS } from '../utils/recipeInfo';
import RecipeCard from './RecipeCard';

function RecipesList({ recipes, recipeType }) {
  const recipeKey = API_KEYS[recipeType].base;
  return (
    <div>
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
    </div>
  );
}

RecipesList.propTypes = {
  recipeType: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipesList;
