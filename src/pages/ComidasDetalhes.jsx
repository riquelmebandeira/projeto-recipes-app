import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import RecipeDetails from '../components/RecipeDetails';
import { fetchRecipeById, fetchRecommendedRecipes } from '../utils/DetailsPage';

export default function ComidasDetalhes() {
  const [recipeInfo, setRecipeInfo] = useState();
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      setRecommendations(await fetchRecommendedRecipes());
      setRecipeInfo(await fetchRecipeById());
    })();
  }, []);

  return !recipeInfo ? <Loading /> : (<RecipeDetails
    id={ recipeInfo.idMeal }
    type="comidas"
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
