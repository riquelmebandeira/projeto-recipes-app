import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchApi from '../utils/FetchApi';

export default function ExplorarIngredientes() {
  const [data, setData] = useState([]);
  const NUMBER = 12;
  const recipeType = window.location.pathname === '/explorar/comidas/ingredientes'
    ? 'comidas' : 'bebidas';

  const fetchIngredients = async () => {
    const resultApi = await fetchApi({
      recipeType,
      filterType: 'exIngredients',
      searchInput: '',
    });
    const recipes = recipeType === 'comidas'
      ? resultApi.meals.slice(0, NUMBER) : resultApi.drinks.slice(0, NUMBER);
    setData(recipes);
    console.log('fetch', resultApi);
  };
  console.log('data', data);

  useEffect(() => { fetchIngredients(); }, []);

  const getImgSrc = (ingredient) => (recipeType === 'comidas'
    ? `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`
    : `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`);

  return (
    <section>
      <Header title="Explorar Ingredientes" showSearchBtn={ false } />
      <Footer />
      <main>
        { data.map((ingre, index) => (
          <section data-testid={ `${index}-ingredient-card` } key={ index }>
            <h1
              data-testid={ `${index}-card-name` }
            >
              { ingre.strIngredient || ingre.strIngredient1 }
            </h1>
            <img
              data-testid={ `${index}-card-img` }
              src={ getImgSrc(ingre.strIngredient || ingre.strIngredient1) }
              alt={ ingre.strIngredient || ingre.strIngredient1 }
            />
          </section>
        )) }
      </main>
    </section>
  );
}
