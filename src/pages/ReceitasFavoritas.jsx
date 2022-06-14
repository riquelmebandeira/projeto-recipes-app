import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import '../styles/ReceitasFavoritas.css';

export default function ReceitasFavoritas() {
  const [filterType, setFilterType] = useState('');
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);

  const changeFilter = ({ target }) => setFilterType(target.value);

  return (
    <>
      <Header
        title="Receitas Favoritas"
        showSearchBtn={ false }
        className="alternative-header"
      />
      <main className="content-container">
        <FilterButtons onClick={ changeFilter } />
        <section className="recipe-list">
          { favoriteRecipes.filter(({ type }) => type.includes(filterType))
            .map((recipe, index) => {
              console.log('recipe', recipe);
              return (
                <FavoriteRecipeCard key={ recipe.id } index={ index } recipe={ recipe } />
              );
            })}
        </section>
      </main>
    </>
  );
}
