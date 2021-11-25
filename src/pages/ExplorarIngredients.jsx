import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { saveRecipesList } from '../redux/actions';
import fetchApi from '../utils/FetchApi';
import { getRecipeType } from '../utils/recipeInfo';

export default function ExplorarIngredientes() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const NUMBER = 12;
  const recipeType = getRecipeType();

  const fetchIngredients = async () => {
    const resultApi = await fetchApi({
      recipeType,
      filterType: 'exIngredients',
      searchInput: '',
    });
    const recipes = recipeType === 'comida'
      ? resultApi.meals.slice(0, NUMBER) : resultApi.drinks.slice(0, NUMBER);
    setData(recipes);
  };

  useEffect(() => { fetchIngredients(); }, []);

  const getImgSrc = (ingredient) => (recipeType === 'comida'
    ? `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`
    : `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`);

  const handleClick = async (ingredientName) => {
    const resultApi = await fetchApi({
      recipeType,
      filterType: 'ingredients',
      searchInput: ingredientName,
    });
    const recipe = recipeType === 'comida'
      ? resultApi.meals : resultApi.drinks;
    dispatch(saveRecipesList(recipe));
    history.push(`/${recipeType}s`);
  };
  return (
    <section>
      <Header title="Explorar Ingredientes" showSearchBtn={ false } />
      <main>
        { data.map((ingre, index) => (
          <section key={ index } className="recipeNamee">
            <h1
              data-testid={ `${index}-card-name` }
            >
              { ingre.strIngredient || ingre.strIngredient1 }
            </h1>
            <button
              data-testid={ `${index}-ingredient-card` }
              type="button"
              onClick={ () => handleClick(ingre.strIngredient || ingre.strIngredient1) }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ getImgSrc(ingre.strIngredient || ingre.strIngredient1) }
                alt={ ingre.strIngredient || ingre.strIngredient1 }
              />
            </button>
          </section>
        )) }
      </main>
      <Footer />
    </section>
  );
}
