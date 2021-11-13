import PropTypes from 'prop-types';
import React from 'react';
import { getFormattedIngredients } from '../utils/DetailsPage';

export default function IngredientsList({ recipe }) {
  return (
    <>
      <h2>Ingredientes</h2>
      <ul>
        { getFormattedIngredients(recipe) }
      </ul>
    </>
  );
}

IngredientsList.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
    measures: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
