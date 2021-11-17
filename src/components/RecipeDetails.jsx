import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecommendationsList from './RecommendationsList';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { fetchRecipeById, fetchRecommendedRecipes, RECIPE_ID,
  treatVideoUrl, isMeal, isFavorite, isDone,
  isInProgress } from '../utils/DetailsPage';
import '../styles/detailsPage.css';

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

  const { thumbnail, title, category, instructions, url } = recipeInfo;

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
          <section className="ingredients">
            <h2>Ingredientes</h2>
            <ul>
              {
                recipeInfo.ingredients.map((ingredient, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
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
        </article>
        <RecommendationsList { ...{ recommendations } } />
        {
          !isDone() && (
            <Link to={ `${RECIPE_ID}/in-progress` }>
              <button type="button" data-testid="start-recipe-btn">
                {
                  isInProgress() ? 'Continuar Receita' : 'Iniciar receita'
                }
              </button>
            </Link>
          )
        }
      </main>
    </>
  );
}
