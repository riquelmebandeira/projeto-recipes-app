import React, { useState, useEffect } from 'react';
import RecommendationCard from './RecommendationCard';
import { fetchRecipeById, fetchRecommendedRecipes,
  treatVideoUrl, MAX_LENGTH, isMeal } from '../utils/DetailsPage';
import '../styles/TelasDeDetalhes.css';

export default function RecipeDetails() {
  const [recipeInfo, setRecipeInfo] = useState(false);
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      setRecommendations(await fetchRecommendedRecipes());
      setRecipeInfo(await fetchRecipeById());
    })();
  }, []);

  const { thumbnail, title, category, instructions, url } = recipeInfo;

  return !recipeInfo ? <p>Carregando...</p> : (
    <div>
      <img src={ thumbnail } alt="Foto da receita" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{title}</h1>
      <p data-testid="recipe-category">{category}</p>
      <input type="image" src="" alt="" data-testid="share-btn" />
      <input type="image" src="" alt="" data-testid="favorite-btn" />
      <section className="ingredients">
        <h2>Ingredientes</h2>
        <ul>
          {
            recipeInfo.ingredients.map((ingredient, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${ingredient} - ${recipeInfo.measures[index]}`}
              </li>
            ))
          }
        </ul>
      </section>
      <section className="instructions">
        <h2>Instruções</h2>
        <p data-testid="instructions">
          {instructions}
        </p>
      </section>
      {
        isMeal && (
          <section className="video-container">
            <h2>Video</h2>
            <iframe
              title="Video da receita"
              data-testid="video"
              src={ treatVideoUrl(url) }
            />
          </section>
        )
      }
      <section className="recommendations">
        <h2>Recomendadas</h2>
        <div className="cards-container">
          {
            recommendations.map(
              (recipe, index) => (
                index < MAX_LENGTH && <RecommendationCard { ...{ recipe, index } } />
              ),
            )
          }
        </div>
      </section>
      <section className="start-btn-container">
        <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
      </section>
    </div>
  );
}
