import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { API_KEYS } from '../utils/recipeInfo';

function StartRecipeBtn({ recipeId, recipeType, className }) {
  const isRecipeDone = useSelector((state) => (state.recipes.doneRecipes
    .some(({ id, type }) => id === recipeId && type === recipeType)
  ));

  const inProgressRecipes = useSelector((state) => (
    state.recipes.inProgressRecipes[API_KEYS[recipeType].inProgress]
  ));

  return !isRecipeDone && (
    <Link to={ `${recipeId}/in-progress` }>
      <button type="button" data-testid="start-recipe-btn" className={ className }>
        { inProgressRecipes[recipeId] ? 'Continuar Receita' : 'Iniciar receita' }
      </button>
    </Link>
  );
}

StartRecipeBtn.propTypes = {
  recipeId: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  className: PropTypes.string,
};

StartRecipeBtn.defaultProps = {
  className: '',
};

export default StartRecipeBtn;
