import React, { useState } from 'react';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../utils/FoodApi';
import {
  fetchIngredientsDrink, fetchNameDrink, fetchFirstLetterDrink } from '../utils/DrinkApi';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filters, setFilters] = useState({
    name: false,
    ingredients: false,
    first: false,
  });

  const filteredFood = () => {
    const { ingredients, name, first } = filters;
    let result;
    if (ingredients) {
      result = fetchIngredients(searchInput);
    } else if (name) {
      result = fetchName(searchInput);
    } else if (searchInput.length > 1 && first === true) {
      result = global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else if (first) {
      result = fetchFirstLetter(searchInput);
    }
    return result;
  };

  const filterDrink = () => {
    const { ingredients, name, first } = filters;
    let result;
    if (ingredients) {
      result = fetchIngredientsDrink(searchInput);
    } else if (name) {
      result = fetchNameDrink(searchInput);
    } else if (searchInput.length > 1 && first === true) {
      result = global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else if (first) {
      result = fetchFirstLetterDrink(searchInput);
    }
    return result;
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
