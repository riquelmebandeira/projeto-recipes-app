import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import fetchApi from '../utils/FetchApi';
import { API_KEYS, convertRecipe, getRecipeType } from '../utils/recipeInfo';

import Button from '../components/Button';
import RecipeHeader from '../components/RecipeHeader';
import RecipesContext from '../context/RecipesContext';
import Loading from '../components/Loading';
import IngredientSteps from '../components/IngredientSteps';
import { addDoneRecipe } from '../redux/actions';

import '../styles/RecipeDetails.css';

export default function Progresso({ match: { params: { id } } }) {
  const recipeType = getRecipeType();
  const [recipe, setRecipe] = useState(null);
  const { loading } = useContext(RecipesContext);
  const dispatch = useDispatch();
  const history = useHistory();

  // check if all ingredients (steps) are checked
  const { [id]: inProgress } = useSelector(
    (state) => state.recipes.inProgressRecipes[API_KEYS[recipeType].inProgress],
  );
  const isComplete = recipe && inProgress
    ? inProgress.length === recipe.ingredients.length
    : false;

  useEffect(() => {
    fetchApi({ recipeType, filterType: 'lookup', searchInput: id })
      .then((json) => Object.values(json)[0])
      .then((recipes) => setRecipe(convertRecipe(recipes[0], recipeType)));
  }, [id, recipeType]);

  return loading || !recipe ? <Loading /> : (
    <>
      <RecipeHeader recipe={ recipe } />
      <section className="recipe-details-container">
        <IngredientSteps recipe={ recipe } />
        <section className="in-progress-instructions">
          <h2>Instruções</h2>
          <p data-testid="instructions">{recipe.instructions}</p>
        </section>
        <Button
          name="Finalizar Receita"
          testid="finish-recipe-btn"
          className="bottom-btn"
          onClick={ () => {
            dispatch(addDoneRecipe(recipe));
            history.push('/receitas-feitas');
          } }
          disabled={ !isComplete }
        />
      </section>
    </>
  );
}

Progresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
