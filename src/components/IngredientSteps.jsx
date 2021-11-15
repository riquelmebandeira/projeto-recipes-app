import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipeInProgress } from '../redux/actions';
import { API_KEYS } from '../utils/recipeInfo';

const IngredientSteps = ({ recipe }) => {
  const { type: recipeType, id: recipeId, ingredients, measures } = recipe;
  const inProgressKey = API_KEYS[recipeType].inProgress;
  const inProgress = useSelector(
    (state) => state.recipes.inProgressRecipes[inProgressKey],
  );
  const [steps, setSteps] = useState(inProgress[recipeId]
    ? inProgress[recipeId].steps
    : ingredients.reduce((initialSteps, ingredient) => (
      { ...initialSteps, [ingredient]: false }
    ), {}));

  const dispatch = useDispatch();
  const updateStep = (ingredient) => {
    const updatedSteps = {
      ...steps,
      [ingredient]: steps[ingredient] === undefined ? true : !steps[ingredient],
    };
    setSteps(updatedSteps);
    dispatch(updateRecipeInProgress(
      { recipeType, recipeId, steps: updatedSteps },
    ));
  };

  return (
    <>
      <h2>Ingredientes</h2>
      <ul>
        { ingredients.map((ingredient, index) => (
          <li key={ `${index}-ingredient-step` }>
            <label
              htmlFor={ `${index}-ingredient-step` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                id={ `${index}-ingredient-step` }
                checked={ steps[ingredient] === true }
                name={ ingredient }
                onChange={ () => updateStep(ingredient) }
              />
              {`${ingredient} - ${measures[index]}`}
            </label>
          </li>
        )) }
      </ul>
    </>
  );
};

IngredientSteps.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
    measures: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngredientSteps;
