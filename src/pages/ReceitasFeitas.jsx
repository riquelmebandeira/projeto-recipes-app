import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import '../styles/mealsAndDrink.css';
import RecipeMadeMeal from '../components/RecipeMadeMeal';
import RecipeMadeDrink from '../components/RecipesMadeDrink';

export default function ReceitasFeitas() {
  const doneRecipes = useSelector((state) => state.recipes.doneRecipes);
  const [filterType, setFilterType] = useState('');
  console.log('done', doneRecipes);

  const changeFilterType = ({ target }) => {
    setFilterType(target.value);
  };

  return (
    <>
      <Header title="Receitas Feitas" showSearchBtn={ false } />
      <FilterButtons onClick={ changeFilterType } />
      {
        doneRecipes.filter(({ type }) => type.includes(filterType))
          .map((recipe, index) => (
            recipe.type === 'comida'
              ? <RecipeMadeMeal recipe={ recipe } index={ index } />
              : <RecipeMadeDrink recipe={ recipe } index={ index } />
          ))
      }
    </>
  );
}
