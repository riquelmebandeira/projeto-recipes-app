import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientsList({ recipe }) {
  const ingredients = getIngredientsOrMeasures('Ingredient', recipe);
  const measures = getIngredientsOrMeasures('Measure', recipe);
  return (
    <>
      <h2>Ingredientes</h2>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} - ${measures[index]}`}
          </li>
        )) }
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
