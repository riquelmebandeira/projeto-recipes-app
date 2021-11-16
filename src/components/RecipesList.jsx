import PropTypes from 'prop-types';
import React from 'react';
import RecipeCard from './RecipeCard';

function RecipesList({ recipes, recipeType }) {
  const recipeKey = recipeType === 'comidas' ? 'Meal' : 'Drink';
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
