import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import RecipeDetails from '../components/RecipeDetails';
import { fetchRecipeById, fetchRecommendedRecipes } from '../utils/DetailsPage';

export default function ComidasDetalhes({ match: { params: { id } } }) {
  const [recipeInfo, setRecipeInfo] = useState();
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      setRecommendations(await fetchRecommendedRecipes(id, 'bebida'));
      setRecipeInfo(await fetchRecipeById(id, 'comida'));
    })();
  }, [id]);

  return (!recipeInfo || !recommendations) ? <Loading /> : (<RecipeDetails
    id={ recipeInfo.idMeal }
    type="comida"
    area={ recipeInfo.strArea }
    category={ recipeInfo.strCategory }
    alcoholicOrNot=""
    name={ recipeInfo.strMeal }
    image={ recipeInfo.strMealThumb }
    ingredients={ recipeInfo.ingredients }
    measures={ recipeInfo.measures }
    recommendations={ recommendations }
    instructions={ recipeInfo.strInstructions }
    url={ recipeInfo.strYoutube }
  />);
}

ComidasDetalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
