import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filters, setFilters] = useState({
    name: false,
    ingredients: false,
    first: false,
  });

  const filtered = async () => {
    const { name, ingredients, first } = filters;
    if (name === true) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      console.log(response);
      return response;
    } if (ingredients === true) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      console.log(response);
      return response;
    } if (first === true) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`);
      const response = await fetchApi.json();
      setSearchInput('');
      console.log(response);
      return response;
    } if (searchInput.length > 1 && first === true) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  return (
    <form>
      <input
        type="text"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
        data-testid="search-input"
      />
      <label htmlFor="inputs-radio">
        <input
          name="inputs-radio"
          type="radio"
          value="ingredients"
          onChange={ () => setFilters({
            ingredients: true,
            name: false,
            first: false,
          }) }
          data-testid="ingredient-search-radio"
        />
        ingrediente
        <input
          name="inputs-radio"
          type="radio"
          value="name"
          onChange={ () => setFilters({
            ingredients: false,
            name: true,
            first: false,
          }) }
          data-testid="name-search-radio"
        />
        nome
        <input
          name="inputs-radio"
          type="radio"
          value="first"
          onChange={ () => setFilters({
            ingredients: false,
            name: false,
            first: true,
          }) }
          data-testid="first-letter-search-radio"
        />
      </label>
      primeira letra
      <button
        type="button"
        onClick={ () => filtered() }
        data-testid="exec-search-btn"
      >
        buscar
      </button>
    </form>
  );
}

export default SearchBar;
