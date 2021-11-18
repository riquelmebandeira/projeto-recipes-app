import PropTypes from 'prop-types';
import React from 'react';
import FavoriteButton from './FavoriteButton';

import ShareButton from './ShareButton';

export default function RecipeHeader({ recipe }) {
  const { image, name, category, id: recipeId } = recipe;

  return (
    <div>
      <img
        src={ image }
        alt="Foto da receita em progresso"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{name }</h1>
      <h2 data-testid="recipe-category">{ category }</h2>
      <ShareButton recipeId={ recipeId } />
      <FavoriteButton recipe={ recipe } />
    </div>
  );
}

RecipeHeader.propTypes = {
  recipe: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
