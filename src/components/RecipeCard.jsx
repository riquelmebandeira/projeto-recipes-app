import PropTypes from 'prop-types';
import React from 'react';

function RecipeCard({ recipeIndex, recipeImg, recipeName }) {
  return (
    <div
      key={ recipeIndex }
      data-testid={ `${recipeIndex}-recipe-card` }
    >
      <img
        src={ recipeImg }
        alt="img"
        className="recipeImg"
        data-testid={ `${recipeIndex}-card-img` }
      />
      <li
        className="recipeName"
        data-testid={ `${recipeIndex}-card-name` }
      >
        {recipeName}
      </li>
    </div>
  );
}

RecipeCard.propTypes = {
  recipeImg: PropTypes.string.isRequired,
  recipeIndex: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default RecipeCard;
