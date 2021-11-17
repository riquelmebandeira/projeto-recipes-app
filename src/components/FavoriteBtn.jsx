import React, { useState, useEffect } from 'react';
import { RECIPE_ID } from '../utils/DetailsPage';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteBtn() {
  const [favorite, setFavorite] = useState();

  const isFavorite = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const result = favoriteRecipes
        && favoriteRecipes.find((recipe) => recipe.id === RECIPE_ID);
    return !!result;
  };

  useEffect(() => { setFavorite(isFavorite()); }, []);

  return (
    <input
      type="image"
      src={ favorite ? blackHeartIcon : whiteHeartIcon }
      alt="Ícone de favoritar"
      data-testid="favorite-btn"
      onClick={ () => setFavorite(!favorite) }
    />
  );
}

export default FavoriteBtn;
