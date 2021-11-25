// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveRecipesList } from '../redux/actions';
import fetchApi from '../utils/FetchApi';
import { API_KEYS, getRecipeType } from '../utils/recipeInfo';

import '../styles/searchBar.css';

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
    <form className="input-radios">
      <section>
        <input
          data-testid="search-input"
          type="text"
          className="search-input"
          value={ searchInput }
          onChange={ (e) => setSearchInput(e.target.value) }
        />
      </section>
      <section>
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
      </section>
      <button
        data-testid="exec-search-btn"
        className="exec-search-btn"
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
