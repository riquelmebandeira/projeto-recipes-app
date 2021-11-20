import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteBtn({ id, type, area, category, alcoholicOrNot, name, image }) {
  const [favorite, setFavorite] = useState();

  const isFavorite = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const result = favoriteRecipes
        && favoriteRecipes.find((recipe) => recipe.id === id);
    return !!result;
  };

  const favoriteRecipe = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const add = [...favoriteRecipes,
      { id, type, area, category, alcoholicOrNot, name, image }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(add));
    setFavorite(!favorite);
  };

  useEffect(() => { setFavorite(isFavorite()); }, []);

  return (
    <input
      type="image"
      src={ favorite ? blackHeartIcon : whiteHeartIcon }
      alt="Ícone de favoritar"
      data-testid="favorite-btn"
      onClick={ () => favoriteRecipe() }
    />
  );
}

export default FavoriteBtn;

FavoriteBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  area: PropTypes.string,
  category: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
  recommendations: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
