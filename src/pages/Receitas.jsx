import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';
import RecipesList from '../components/RecipesList';
import { getRecipeType } from '../utils/recipeInfo';
import { getRecipes } from '../redux/actions';
import '../styles/Receitas.css';

export default function Receitas() {
  const [recipeType, setRecipeType] = useState('comida');
  const { recipeList } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const TWELVE_MEALSORDRINK = 12;
  const listRecipes = recipeList.slice(0, TWELVE_MEALSORDRINK);

  useEffect(() => {
    const typeCheck = getRecipeType();

    if (typeCheck !== recipeType || recipeList.length < 1) {
      dispatch(getRecipes({ recipeType: typeCheck }));
      setRecipeType(typeCheck);
    }
  });

  return (
    <>
      <Header
        title={ recipeType === 'comida' ? 'Comidas' : 'Bebidas' }
        className="header-container"
      />
      <main className="content-container">
        <CategoryButtons recipeType={ recipeType } />
        <RecipesList recipeType={ recipeType } recipes={ listRecipes } />
        <Footer />
      </main>
    </>
  );
}
