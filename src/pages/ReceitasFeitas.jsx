import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import '../styles/mealsAndDrink.css';
import RecipeMadeMeal from '../components/RecipeMadeMeal';
import RecipeMadeDrink from '../components/RecipesMadeDrink';

import '../styles/feceitasfeitasFavoritas.css';

export default function ReceitasFeitas() {
  const doneRecipes = useSelector((state) => state.recipes.doneRecipes);
  const [filterType, setFilterType] = useState('');

  const changeFilterType = ({ target }) => {
    setFilterType(target.value);
  };

  return (
    <section className="content-container">
      <Header title="Receitas Feitas" showSearchBtn={ false } />
      <FilterButtons onClick={ changeFilterType } />
      {
        doneRecipes.filter(({ type }) => type.includes(filterType))
          .map((recipe, index) => (
            recipe.type === 'comida'
              ? <RecipeMadeMeal key={ recipe.id } recipe={ recipe } index={ index } />
              : <RecipeMadeDrink key={ recipe.id } recipe={ recipe } index={ index } />
          ))
      }
    </section>
  );
}
