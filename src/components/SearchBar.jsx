import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState([]);
  const [ingredientsInput, setIngredientsInput] = useState([]);
  const [nameInput, setNameInput] = useState([]);
  const [first, setFirst] = useState([]);

  console.log(searchInput);

  const fetchIngredients = async () => {
    if (ingredientsInput.length > 0) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const response = await fetchApi.json();
      console.log('ingredientes', response);
    } else if (nameInput.length > 0) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
      const response = await fetchApi.json();
      console.log('nome', response);
    } else if (first.length === 1) {
      const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`);
      const response = await fetchApi.json();
      console.log('letra', response);
    } else {
      global.alert('erro');
    }
  };

  return (
    <header>
      <input
        type="text"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
        data-testid="search-input"
      />
      <input
        type="radio"
        value="ingredients"
        onChange={ (e) => setIngredientsInput(e.target.value) }
        data-testid="ingredient-search-radio"
      />
      ingrediente
      <input
        type="radio"
        value="name"
        onChange={ (e) => setNameInput(e.target.value) }
        data-testid="name-search-radio"
      />
      nome
      <input
        type="radio"
        value="f"
        onChange={ (e) => setFirst(e.target.value) }
        data-testid="first-letter-search-radio"
      />
      primeira letra
      <button
        type="button"
        onClick={ () => fetchIngredients() }
        data-testid="exec-search-btn"
      >
        buscar
      </button>
    </header>
  );
}

export default SearchBar;
