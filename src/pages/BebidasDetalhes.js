import React, { useState, useEffect } from 'react';
import RecommendationCard from '../components/RecommendationCard';
import { fetchRecipeById, fetchRecommendedRecipes,
  getIngredientsOrMeasures, MAX_LENGTH } from '../utils/DetailsPage';
import '../css/TelasDeDetalhes.css';

export default function ComidasDetalhes() {
  const [recipeInfo, setRecipeInfo] = useState(false);
  const [ingredients, setIngredients] = useState();
  const [measures, setMeasures] = useState();
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchRecipeById();
      setIngredients(getIngredientsOrMeasures('Ingredient', data));
      setMeasures(getIngredientsOrMeasures('Measure', data));
      setRecommendations(await fetchRecommendedRecipes());
      setRecipeInfo(data);
    })();
  }, []);

  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = recipeInfo;

  return !recipeInfo ? <p>Carregando...</p> : (
    <div>
      <img src={ strDrinkThumb } alt="Foto da receita" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{strDrink}</h1>
      <p data-testid="recipe-category">{strAlcoholic}</p>
      <input type="image" src="" alt="" data-testid="share-btn" />
      <input type="image" src="" alt="" data-testid="favorite-btn" />
      <h2>Ingredientes</h2>
      <ul>
        {
          ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredient} - ${measures[index]}`}
            </li>
          ))
        }
      </ul>
      <h2>Instruções</h2>
      <p data-testid="instructions">
        {strInstructions}
      </p>
      <section>
        <h2>Recomendadas</h2>
        <div className="card-container">
          {
            recommendations.map(({ strMealThumb, strCategory, strMeal }, index) => (
              index < MAX_LENGTH ? (
                <RecommendationCard
                  src={ strMealThumb }
                  index={ index }
                  category={ strCategory }
                  title={ strMeal }
                />
              ) : undefined
            ))
          }
        </div>
      </section>
      <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
    </div>
  );
}
