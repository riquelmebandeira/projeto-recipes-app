// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fetchApi from '../utils/FetchApi';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filterType, setFilterType] = useState('name');

  const handleClick = () => {
    const resultApi = fetchApi({
      filterType,
      searchInput,
      recipeType: window.location.pathname.slice(1),
    });
    if (resultApi.length === 1) {
      // logica de redirect
      // history.push(`/comidas/${resultApi[0].idMeal}`);
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
        onClick={ handleClick }
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
