import React, { useState, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import StartRecipeBtn from './StartRecipeBtn';
import RecommendationsList from './RecommendationsList';
import FavoriteBtn from './FavoriteBtn';
import ShareBtn from './ShareBtn';
import { fetchRecipeById, fetchRecommendedRecipes,
  treatVideoUrl, isMeal } from '../utils/DetailsPage';
import '../styles/detailsPage.css';

export default function RecipeDetails() {
  const [recipeInfo, setRecipeInfo] = useState(false);
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    (async () => {
      setRecommendations(await fetchRecommendedRecipes());
      setRecipeInfo(await fetchRecipeById());
    })();
  }, []);

  const { thumbnail, title, category, instructions,
    url, ingredients, measures } = recipeInfo;

  return !recipeInfo ? <p>Carregando...</p> : (
    <>
      <header>
        <img src={ thumbnail } alt="Foto da receita" data-testid="recipe-photo" />
      </header>
      <main>
        <section className="container">
          <div className="info-container">
            <h1 data-testid="recipe-title">{title}</h1>
            <p data-testid="recipe-category">{category}</p>
          </div>
          <div className="input-container">
            <FavoriteBtn />
            <ShareBtn />
          </div>
        </section>
        <article className="preparation-method">
          <IngredientsList { ...{ ingredients, measures } } />
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
        </article>
        <RecommendationsList { ...{ recommendations } } />
        <StartRecipeBtn />
      </main>
    </>
  );
}
