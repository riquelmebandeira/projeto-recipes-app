/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import '../styles/Receitas.css';
import '../styles/mealsAndDrink.css';
import RecipeMadeMeal from '../components/RecipeMadeMeal';
import RecipeMadeDrink from '../components/RecipesMadeDrink';

import '../styles/ReceitasFeitas.css';

export default function ReceitasFeitas() {
  const doneRecipes = useSelector((state) => state.recipes.doneRecipes);
  const [filterType, setFilterType] = useState('');

  const changeFilterType = ({ target }) => {
    setFilterType(target.value);
  };

  return (
    <>
      <Header title="Receitas Feitas" showSearchBtn={ false } className="alternative-header" />
      <main className="content-container">
        <FilterButtons onClick={ changeFilterType } />
        <section className="recipe-list">
          {
            doneRecipes.filter(({ type }) => type.includes(filterType))
              .map((recipe, index) => (
                recipe.type === 'comida'
                  ? <RecipeMadeMeal key={ recipe.id } recipe={ recipe } index={ index } />
                  : <RecipeMadeDrink key={ recipe.id } recipe={ recipe } index={ index } />
              ))
          }
        </section>
      </main>
    </>
  );
}
