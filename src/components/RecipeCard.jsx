import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipeIndex, recipeImg, recipeName, recipeType, recipeId }) {
  return (
    <div className="recipe-card">
      <Link
        to={ `${recipeType}s/${recipeId}` }
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
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  recipeId: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
  recipeIndex: PropTypes.number.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default RecipeCard;
