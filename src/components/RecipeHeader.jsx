import PropTypes from 'prop-types';
import React from 'react';
import { getRecipeType } from '../utils/recipeInfo';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';
import '../styles/RecipeHeader.css';

export default function RecipeHeader({ recipe }) {
  const { image, name, category, id: recipeId, type, alcoholicOrNot } = recipe;
  const isMeal = type === 'comida';

  return (
    <div className="recipe-header-container">
      <img
        src={ image }
        alt="Foto da receita"
        data-testid="recipe-photo"
        className="header-img"
      />
      <section>
        <div className="info-container">
          <h1 data-testid="recipe-title">{name }</h1>
          <p data-testid="recipe-category">{ isMeal ? category : alcoholicOrNot }</p>
        </div>
        <div className="btn-container">
          <ShareButton recipeId={ recipeId } recipeType={ getRecipeType() } />
          <FavoriteButton recipe={ recipe } />
        </div>
      </section>
    </div>
  );
}

RecipeHeader.propTypes = {
  recipe: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }).isRequired,
};
