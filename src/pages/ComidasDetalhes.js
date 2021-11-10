import React, { useState, useEffect } from 'react';
import { fetchMealById, getIngredientsOrMeasures, treatVideoUrl }
  from '../utils/DetailsPage';

export default function ComidasDetalhes() {
  const [recipeInfo, setRecipeInfo] = useState(false);
  const [ingredients, setIngredients] = useState();
  const [measures, setMeasures] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchMealById();
      setIngredients(getIngredientsOrMeasures('Ingredient', data));
      setMeasures(getIngredientsOrMeasures('Measure', data));
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
      <h2>Recomendadas</h2>
      <div>
        <img src="" alt="" data-testid="0-recomendation-card" />
        <p>Não alcólico</p>
        <h4>Receita recomendada</h4>
      </div>
      <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
    </div>
  );
}
