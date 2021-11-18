import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function FavoriteRecipeCard({ index, recipe }) {
  const { category, image, type, id, name } = recipe;
  return (
    <Link
      to={ `${type}s/${id}` }
      key={ index }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ image }
        alt={ `favorite recipe ${index}` }
        data-testid={ `${index}-horizontal-image` }
      />
      <ShareButton recipeId={ id } />
      <FavoriteButton recipeId={ id } />
      <span
        data-testid={ `${index}-horizontal-top-text` }
      >
        { category }
      </span>
      <li
        data-testid={ `${index}-horizontal-name` }
      >
        {name}
      </li>
    </Link>
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
