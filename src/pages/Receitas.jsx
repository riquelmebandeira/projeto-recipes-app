import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';
import RecipesList from '../components/RecipesList';
import { getRecipeType } from '../utils/recipeInfo';
import { getRecipes } from '../redux/actions';

export default function Receitas() {
  const { recipeList } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const TWELVE_MEALSORDRINK = 12;
  const listRecipes = recipeList.slice(0, TWELVE_MEALSORDRINK);
  const recipeType = getRecipeType();
  useEffect(() => {
    if (recipeList.length === 0) {
      dispatch(getRecipes({ recipeType }));
    }
  }, []);

  return (
    <section className="content-container">
      <Header title={ recipeType === 'comida' ? 'Comidas' : 'Bebidas' } />
      <CategoryButtons />
      <section>
        <RecipesList recipeType={ recipeType } recipes={ listRecipes } />
      </section>
      <Footer />
    </section>
  );
}
