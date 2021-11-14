import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi, { API_KEYS } from '../utils/FetchApi';
import Button from '../components/Button';
import RecipeHeader from '../components/RecipeHeader';
import RecipesContext from '../context/RecipesContext';
import Loading from '../components/Loading';
import IngredientSteps from '../components/IngredientSteps';

export default function Progresso({ recipeType, match: { params: { id } } }) {
  const [recipe, setRecipe] = useState(null);
  const { loading } = useContext(RecipesContext);

  useEffect(() => {
    fetchApi({ recipeType, filterType: 'lookup', searchInput: id })
      .then((json) => Object.values(json)[0])
      .then((recipes) => setRecipe(recipes[0]));
  }, [id, recipeType]);

  return loading || !recipe ? <Loading /> : (
    <section>
      <RecipeHeader
        thumb={ recipe[API_KEYS[recipeType].thumb] }
        title={ recipe[API_KEYS[recipeType].title] }
        category={ recipe[API_KEYS[recipeType].category] }
      />
      <IngredientSteps
        recipe={ recipe }
        recipeType={ recipeType }
        recipeId={ id }
      />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <Button text="Finalizar Receita" testid="finish-recipe-btn" />
    </section>
  );
}

Progresso.propTypes = {
  recipeType: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
