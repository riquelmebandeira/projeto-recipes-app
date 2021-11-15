import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../utils/FetchApi';
import { convertRecipe, getRecipeType } from '../utils/recipeInfo';

import Button from '../components/Button';
import RecipeHeader from '../components/RecipeHeader';
import RecipesContext from '../context/RecipesContext';
import Loading from '../components/Loading';
import IngredientSteps from '../components/IngredientSteps';

export default function Progresso({ match: { params: { id } } }) {
  const recipeType = getRecipeType();
  const [recipe, setRecipe] = useState(null);
  const { loading } = useContext(RecipesContext);

  useEffect(() => {
    fetchApi({ recipeType, filterType: 'lookup', searchInput: id })
      .then((json) => Object.values(json)[0])
      .then((recipes) => setRecipe(convertRecipe(recipes[0], recipeType)));
  }, [id, recipeType]);

  return loading || !recipe ? <Loading /> : (
    <section>
      <RecipeHeader recipe={ recipe } />
      <IngredientSteps recipe={ recipe } />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <Button text="Finalizar Receita" testid="finish-recipe-btn" />
    </section>
  );
}

Progresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
