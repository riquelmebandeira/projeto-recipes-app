import React, { useState, useEffect } from 'react';

const getIdFromUrl = () => (
  window.location.href.substring(window.location.href.lastIndexOf('/') + 1));

export default function ComidasDetalhes() {
  const [recipeInfo, setRecipeInfo] = useState([]);

  const fetchRecipeById = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getIdFromUrl()}`);
    const data = await response.json();
    setRecipeInfo(data.meals[0]);
  };

  useEffect(() => {
    fetchRecipeById();
  }, []);

  return (
    <div>
      <img src="" alt="" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">Título da Receita</h1>
      <p data-testid="recipe-category" />
      <input type="image" src="" alt="" data-testid="share-btn" />
      <input type="image" src="" alt="" data-testid="favorite-btn" />
      <h2>Ingredientes</h2>
      <ul>
        {/* {
          ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredient} - ${measure[index]}`}
            </li>
          ))
        } */}
        <li data-testid="0-ingredient-name-and-measure" />
      </ul>
      <h2>Instruções</h2>
      <p data-testid="instructions" />
      <h2>Video</h2>
      <iframe
        width="420"
        height="315"
        title="Video da receita"
        data-testid="video"
        src=""
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
