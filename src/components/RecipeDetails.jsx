import React, { useState, useEffect } from 'react';
import StartRecipeBtn from './StartRecipeBtn';
import RecommendationsList from './RecommendationsList';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { fetchRecipeById, fetchRecommendedRecipes,
  treatVideoUrl, isMeal, isFavorite } from '../utils/DetailsPage';
import '../styles/detailsPage.css';
import IngredientsList from './IngredientsList';

export default function RecipeDetails() {
  const [recipeInfo, setRecipeInfo] = useState(false);
  const [recommendations, setRecommendations] = useState();
  const [shared, setShared] = useState();
  const [favorite, setFavorite] = useState();

  const shareRecipe = () => {
    setShared(true);
    return navigator.clipboard.writeText(window.location.href);
  };

  useEffect(() => {
    (async () => {
      setFavorite(isFavorite());
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
            <input
              type="image"
              src={ favorite ? blackHeartIcon : whiteHeartIcon }
              alt="Ícone de favoritar"
              data-testid="favorite-btn"
              onClick={ () => setFavorite(!favorite) }
            />
            <input
              type="image"
              src={ shareIcon }
              alt="Ícone de compartilhar"
              data-testid="share-btn"
              onClick={ shareRecipe }
            />
            { shared && <p>Link copiado!</p>}
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
