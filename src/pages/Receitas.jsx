import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';
import RecipesList from '../components/RecipesList';
import Loading from '../components/Loading';
import fetchApi from '../utils/FetchApi';

export default function Receitas() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const TWELVE_MEALSORDRINK = 12;
  const listRecipes = recipes.slice(0, TWELVE_MEALSORDRINK);
  const recipeType = window.location.href.split('/')[3];

  const getRecipes = async (filterType = 'name', searchInput = '') => {
    setLoading(true);
    console.log(recipeType, filterType, searchInput);

    const response = await fetchApi({
      recipeType,
      filterType,
      searchInput,
    });
    setRecipes(Object.values(response)[0]);
    setLoading(false);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <section>
      <Header title={ recipeType } />
      <CategoryButtons getRecipes={ getRecipes } recipeType={ recipeType } />
      { loading ? (
        <Loading />
      ) : (
        <section>
          <RecipesList recipeType={ recipeType } recipes={ listRecipes } />
        </section>
      ) }
      <Footer />
    </section>
  );
}
