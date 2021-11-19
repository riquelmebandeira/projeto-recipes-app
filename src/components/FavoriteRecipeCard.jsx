import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function FavoriteRecipeCard({ index, recipe }) {
  const { category, image, type, id, name } = recipe;
  return (
    <li
      key={ index }
    >
      <Link
        to={ `${type}s/${id}` }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ image }
          alt={ `favorite recipe ${index}` }
          data-testid={ `${index}-horizontal-image` }
        />
        <ShareButton
          testid={ `${index}-horizontal-share-btn` }
          recipeId={ id }
        />
        <FavoriteButton
          testid={ `${index}-horizontal-favorite-btn` }
          recipe={ recipe }
        />
        <span
          data-testid={ `${index}-horizontal-top-text` }
        >
          { category }
        </span>
        <span
          data-testid={ `${index}-horizontal-name` }
        >
          {name}
        </span>
      </Link>
    </li>
  );
}

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    category: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default FavoriteRecipeCard;
