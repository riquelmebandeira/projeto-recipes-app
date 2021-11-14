import PropTypes from 'prop-types';
import React from 'react';
import IconButton from './IconButton';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/whiteHeartIcon.svg';

export default function RecipeHeader({ thumb, title, category }) {
  return (
    <div>
      <img
        src={ thumb }
        alt="Foto da receita em progresso"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{title }</h1>
      <h2 data-testid="recipe-category">{ category }</h2>
      <IconButton name="Compartilhar" src={ shareIcon } testid="share-btn" />
      <IconButton name="Favoritar" src={ favoriteIcon } testid="favorite-btn" />
    </div>
  );
}

RecipeHeader.propTypes = {
  category: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
