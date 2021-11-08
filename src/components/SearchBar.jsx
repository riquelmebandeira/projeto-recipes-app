import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filters, setFilters] = useState({
    name: false,
    ingredients: false,
    first: false,
  });

  const filteredFood = async () => {
    const { name, ingredients, first } = filters;
    if (name === true) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      return response;
    } if (ingredients === true) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      return response;
    } if (searchInput.length > 1 && first === true) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    } if (first === true) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      return response;
    }
  };

  const filterDrink = async () => {
    const { name, ingredients, first } = filters;
    if (name === true) {
      const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      return response;
    } if (ingredients === true) {
      const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      return response;
    } if (searchInput.length > 1 && first === true) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    } if (first === true) {
      const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      return response;
    }
  };

  return (
    <form>
      <input
        data-testid="search-input"
        type="text"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
      <label htmlFor="inputs-radio">
        <input
          data-testid="ingredient-search-radio"
          name="inputs-radio"
          type="radio"
          value="ingredients"
          onChange={ () => setFilters({
            ingredients: true,
            name: false,
            first: false,
          }) }
        />
        ingrediente
        <input
          data-testid="name-search-radio"
          name="inputs-radio"
          type="radio"
          value="name"
          onChange={ () => setFilters({
            ingredients: false,
            name: true,
            first: false,
          }) }
        />
        nome
        <input
          data-testid="first-letter-search-radio"
          name="inputs-radio"
          type="radio"
          value="first"
          onChange={ () => setFilters({
            ingredients: false,
            name: false,
            first: true,
          }) }
        />
      </label>
      primeira letra
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={
          window.location.pathname.includes('comidas')
            ? filteredFood : filterDrink
        }
      >
        buscar
      </button>
    </form>
  );
}

export default SearchBar;
