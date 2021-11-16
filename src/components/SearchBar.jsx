// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../utils/FetchApi';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filterType, setFilterType] = useState('name');
  const history = useHistory();

  const handleClick = async () => {
    const recipeType = window.location.pathname.slice(1);
    const resultApi = await fetchApi({
      filterType,
      searchInput,
      recipeType,
    });

    const recipes = recipeType === 'comidas' ? resultApi.meals : resultApi.drinks;
    if (recipes === null) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else if (recipes.length === 1) {
      const idKey = recipeType === 'comidas' ? 'idMeal' : 'idDrink';
      history.push(`/${recipeType}/${recipes[0][idKey]}`);
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
          checked={ filterType === 'ingredients' }
          onChange={ () => setFilterType('ingredients') }
        />
        ingrediente
        <input
          data-testid="name-search-radio"
          name="inputs-radio"
          type="radio"
          value="name"
          checked={ filterType === 'name' }
          onChange={ () => setFilterType('name') }
        />
        nome
        <input
          data-testid="first-letter-search-radio"
          name="inputs-radio"
          type="radio"
          value="first"
          checked={ filterType === 'first' }
          onChange={ () => setFilterType('first') }
        />
      </label>
      primeira letra
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleClick() }
      >
        buscar
      </button>
    </form>
  );
}

// SearchBar.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }).isRequired,
// };

export default SearchBar;
