import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RecipeDetails.css';
import { getRecipeType } from '../utils/recipeInfo';

function RecommendationCard({ recipe, index }) {
  const isMeal = getRecipeType() === 'comida';

  return (
    <div className="recommendation-card">
      <img
        src={ isMeal ? recipe.strDrinkThumb : recipe.strMealThumb }
        alt="Foto da receita"
        data-testid={ `${index}-recomendation-card` }
        className="card-photo"
      />
      <p>{ isMeal ? recipe.strAlcoholic : recipe.strCategory }</p>
      <h3 data-testid={ `${index}-recomendation-title` }>
        {isMeal ? recipe.strDrink : recipe.strMeal }
      </h3>
    </div>
  );
}

RecommendationCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecommendationCard;
