import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButton from '../components/CategoryButton';
import RecipesList from '../components/RecipesList';
import Loading from '../components/Loading';
import fetchApi from '../utils/FetchApi';

export default function Comidas() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const FIVE_CATEGORIES = 5;
  const TWELVE_MEALSORDRINK = 12;
  const categoryRecipes = recipes.slice(0, FIVE_CATEGORIES);
  const listRecipes = recipes.slice(0, TWELVE_MEALSORDRINK);
  const recipeType = 'comidas';

  const getRecipes = async (category) => {
    setLoading(true);
    const response = await fetchApi({
      recipeType,
      filterType: 'list',
      searchInput: category,
    });
    setRecipes(response.meals);
    setLoading(false);
  };

  useEffect(() => {
    getRecipes('list');
  }, []);

  const handleClick = async ({ target }) => {
    const valueBtn = target.value;
    getRecipes(valueBtn);
  };

  return (
    <section>
      <Header title="Comidas" />
      { loading ? (
        <Loading />
      ) : (
        <section>
          <CategoryButton handleClick={ handleClick } recipes={ categoryRecipes } />
          <RecipesList recipeType={ recipeType } recipes={ listRecipes } />
        </section>
      ) }
      <Footer />
    </section>
  );
}
