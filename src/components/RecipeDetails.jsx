import React from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientsList';
import StartRecipeBtn from './StartRecipeBtn';
import RecommendationsList from './RecommendationsList';
import FavoriteBtn from './FavoriteBtn';
import ShareBtn from './ShareBtn';
import { treatVideoUrl } from '../utils/DetailsPage';
import '../styles/RecipeDetails.css';

export default function RecipeDetails(props) {
  const { category, alcoholicOrNot, name, image, ingredients,
    measures, recommendations, instructions, url, id, type } = props;
  const isMeal = type === 'comida';

  return (
    <>
      <header className="recipe-details-header">
        <img
          src={ image }
          alt="Foto da receita"
          data-testid="recipe-photo"
          className="header-img"
        />
      </header>
      <main className="details-container">
        <section className="container">
          <div className="info-container">
            <h1
              data-testid="recipe-title"
            >
              {name}
            </h1>
            <p
              data-testid="recipe-category"
              className="recipe-category"
            >
              { isMeal ? category : alcoholicOrNot }
            </p>
          </div>
          <div className="input-container">
            <FavoriteBtn { ...props } />
            <ShareBtn recipeId={ id } recipeType={ type } />
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
        <StartRecipeBtn
          recipeId={ id }
          recipeType={ type }
          ingredientsQty={ ingredients.length }
          className="bottom-btn"
        />
      </main>
    </>
  );
}

RecipeDetails.propTypes = {
  category: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
  recommendations: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
