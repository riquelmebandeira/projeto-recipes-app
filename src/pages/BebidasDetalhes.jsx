import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import RecipeDetails from '../components/RecipeDetails';
import { fetchRecipeById, fetchRecommendedRecipes } from '../utils/DetailsPage';

export default function BebidasDetalhes({ match: { params: { id } } }) {
  const [recipeInfo, setRecipeInfo] = useState();
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      setRecommendations(await fetchRecommendedRecipes(id, 'comida'));
      setRecipeInfo(await fetchRecipeById(id, 'bebida'));
    })();
  }, [id]);

  return (!recipeInfo || !recommendations) ? <Loading /> : (<RecipeDetails
    id={ recipeInfo.idDrink }
    type="bebida"
    area=""
    category={ recipeInfo.strCategory }
    alcoholicOrNot={ recipeInfo.strAlcoholic }
    name={ recipeInfo.strDrink }
    image={ recipeInfo.strDrinkThumb }
    ingredients={ recipeInfo.ingredients }
    measures={ recipeInfo.measures }
    recommendations={ recommendations }
    instructions={ recipeInfo.strInstructions }
    url=""
  />);
}

BebidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
