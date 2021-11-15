import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import IconButton from './IconButton';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { getRecipeURL } from '../utils/recipeInfo';
import { toggleFavoriteRecipe } from '../redux/actions';

const copy = require('clipboard-copy');

export default function RecipeHeader({ recipe }) {
  const { image, name, category, id: recipeId } = recipe;
  const [urlCopied, setUrlCopied] = useState(false);
  const dispatch = useDispatch();
  const isFavorite = useSelector(
    (state) => state.recipes.favoriteRecipes
      .some(({ id }) => id === recipeId),
  );

  const shareRecipe = () => {
    const THREE_SECONDS = 3000;
    copy(getRecipeURL(recipeId));
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), THREE_SECONDS);
  };

  const favoriteRecipe = () => {
    dispatch(toggleFavoriteRecipe(recipe));
  };

  return (
    <div>
      <img
        src={ image }
        alt="Foto da receita em progresso"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{name }</h1>
      <h2 data-testid="recipe-category">{ category }</h2>
      { urlCopied ? <div>Link copiado!</div> : (
        <IconButton
          name="Compartilhar"
          src={ shareIcon }
          onClick={ () => shareRecipe() }
          testid="share-btn"
        />
      ) }
      <IconButton
        name="Favoritar"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        onClick={ () => favoriteRecipe() }
        testid="favorite-btn"
      />
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
