import React from 'react';
import { Link } from 'react-router-dom';
import { RECIPE_ID, isDone, isInProgress } from '../utils/DetailsPage';

function StartRecipeBtn() {
  return !isDone() && (
    <Link to={ `${RECIPE_ID}/in-progress` }>
      <button type="button" data-testid="start-recipe-btn">
        {
          isInProgress() ? 'Continuar Receita' : 'Iniciar receita'
        }
      </button>
    </Link>
  );
}

export default StartRecipeBtn;
