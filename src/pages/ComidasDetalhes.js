import React, { useState, useEffect } from 'react';
import RecommendationCard from '../components/RecommendationCard';
import { fetchRecipeById, fetchRecommendedRecipes,
  getIngredientsOrMeasures, treatVideoUrl, MAX_LENGTH } from '../utils/DetailsPage';
import '../styles/TelasDeDetalhes.css';

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

  const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = recipeInfo;

  return !recipeInfo ? <p>Carregando...</p> : (
    <div>
      <img src={ strMealThumb } alt="Foto da receita" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{strMeal}</h1>
      <p data-testid="recipe-category">{strCategory}</p>
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
      <h2>Video</h2>
      <iframe
        width="420"
        height="315"
        title="Video da receita"
        data-testid="video"
        src={ treatVideoUrl(strYoutube) }
      />
      <section>
        <h2>Recomendadas</h2>
        <div className="card-container">
          {
            recommendations.map(({ strDrinkThumb, strAlcoholic, strDrink }, index) => (
              index < MAX_LENGTH ? (
                <RecommendationCard
                  src={ strDrinkThumb }
                  index={ index }
                  category={ strAlcoholic }
                  title={ strDrink }
                />
              ) : undefined
            ))
          }
        </div>
      </section>
      <div className="start-btn-container">
        <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
      </div>
    </div>
  );
}
