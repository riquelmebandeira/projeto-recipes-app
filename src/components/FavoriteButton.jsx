import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteRecipe } from '../redux/actions';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import IconButton from './IconButton';

export default function FavoriteButton({ recipe, testid }) {
  const { id: recipeId } = recipe;
  const dispatch = useDispatch();

  const favoriteRecipe = () => {
    dispatch(toggleFavoriteRecipe(recipe));
  };

  const isFavorite = useSelector(
    (state) => state.recipes.favoriteRecipes
      .some(({ id }) => id === recipeId),
  );

  return (
    <IconButton
      name="Favoritar"
      src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => favoriteRecipe() }
      testid={ testid }
    />
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  testid: PropTypes.string,
};

FavoriteButton.defaultProps = {
  testid: 'favorite-btn',
};
