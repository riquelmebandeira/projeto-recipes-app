import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes } from '../redux/actions';
import fetchApi from '../utils/FetchApi';
import '../styles/CategoryButtons.css';

function CategoryButtons({ recipeType }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState('');
  const FIVE_CATEGORIES = 5;
  const getCategories = async () => {
    const responseJson = await fetchApi({
      recipeType,
      filterType: 'list', // nome da chave
      searchInput: 'list',
    });
    setCategories(Object.values(responseJson)[0]);
  };

  useEffect(() => {
    getCategories(); // eslint-disable-next-line
  }, [recipeType]);

  return (
    <section className="category-buttons">
      <button
        className="buttons"
        type="button"
        key="all"
        data-testid="All-category-filter"
        value="list"
        onClick={ () => {
          setFiltered('');
          dispatch(getRecipes({ recipeType }));
        } }
      >
        All
      </button>
      {categories.slice(0, FIVE_CATEGORIES).map((get, index) => (
        <button
          className="buttons"
          type="button"
          key={ index }
          data-testid={ `${get.strCategory}-category-filter` }
          onClick={ () => {
            if (filtered === get.strCategory) {
              setFiltered('');
              dispatch(getRecipes({ recipeType }));
            } else {
              setFiltered(get.strCategory);
              dispatch(getRecipes(
                { filterType: 'category', searchInput: get.strCategory, recipeType },
              ));
            }
          } }
        >
          { get.strCategory }
        </button>
      ))}
    </section>
  );
}

CategoryButtons.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default CategoryButtons;
