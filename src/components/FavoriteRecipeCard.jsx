import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import '../styles/favoriteRecipes.css';

function FavoriteRecipeCard({ index, recipe }) {
  const { category, image, type, id, name, area, alcoholicOrNot } = recipe;
  return (
    <li
      key={ index }
      className="recipeNamee"
    >
      <Link
        to={ `${type}s/${id}` }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ image }
          alt={ `favorite recipe ${index}` }
          data-testid={ `${index}-horizontal-image` }
          className="favorite-recipe-photo recipeImgg"
        />
        <section className="position-colum">

          <span
            data-testid={ `${index}-horizontal-top-text` }
            className="txt"
          >
            { type.includes('comida') ? `${area} - ${category}` : alcoholicOrNot }
          </span>
          <span
            className="txt"
            data-testid={ `${index}-horizontal-name` }
          >
            {name}
          </span>
        </section>
      </Link>
      <section className="division-btn-names espaco">
        <ShareButton
          testid={ `${index}-horizontal-share-btn` }
          recipeId={ id }
          recipeType={ type }
        />
        <FavoriteButton
          testid={ `${index}-horizontal-favorite-btn` }
          recipe={ recipe }
        />
      </section>
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
