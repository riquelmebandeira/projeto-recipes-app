// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveRecipesList } from '../redux/actions';
import fetchApi from '../utils/FetchApi';
import { API_KEYS, getRecipeType } from '../utils/recipeInfo';

import '../styles/SearchBar.css';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filterType, setFilterType] = useState('name');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = async () => {
    const recipeType = getRecipeType();
    const resultApi = await fetchApi({
      filterType,
      searchInput,
      recipeType,
    });

    const recipes = Object.values(resultApi)[0];

    if (recipes === null) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else if (recipes.length === 1) {
      const idKey = API_KEYS[recipeType].id;
      history.push(`/${recipeType}s/${recipes[0][idKey]}`);
    } else if (recipes.length > 1) {
      dispatch(saveRecipesList(recipes));
    }
  };

  return (
    <form className="search-form">
      <input
        data-testid="search-input"
        type="text"
        className="search-input"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
      <label htmlFor="ingredient-search-radio">
        <input
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          type="radio"
          value="ingredients"
          checked={ filterType === 'ingredients' }
          onChange={ () => setFilterType('ingredients') }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          data-testid="name-search-radio"
          id="name-search-radio"
          type="radio"
          value="name"
          checked={ filterType === 'name' }
          onChange={ () => setFilterType('name') }
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          type="radio"
          value="first"
          checked={ filterType === 'first' }
          onChange={ () => setFilterType('first') }
        />
        Letra inicial
      </label>
      <button
        data-testid="exec-search-btn"
        className="exec-search-btn"
        type="button"
        onClick={ () => handleClick() }
      >
        Buscar
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
