import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

function FavoriteRecipeCard({ index, recipe }) {
  const { category, image, type, id, name, area, alcoholicOrNot } = recipe;
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
        <span
          data-testid={ `${index}-horizontal-top-text` }
        >
          { type.includes('comida') ? `${area} - ${category}` : alcoholicOrNot }
        </span>
        <span
          data-testid={ `${index}-horizontal-name` }
        >
          {name}
        </span>
      </Link>
      <ShareButton
        testid={ `${index}-horizontal-share-btn` }
        recipeId={ id }
        recipeType={ type }
      />
      <FavoriteButton
        testid={ `${index}-horizontal-favorite-btn` }
        recipe={ recipe }
      />
    </li>
  );
}

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default FavoriteRecipeCard;
