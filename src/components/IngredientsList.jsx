import React from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ ingredients, measures }) {
  return (
    <section className="ingredients">
      <h2>Ingredientes</h2>
      <ul>
        {
          ingredients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${ingredient} - ${measures[index]}`}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IngredientsList;
