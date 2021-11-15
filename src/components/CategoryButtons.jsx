import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../styles/mealsAndDrink.css';
import fetchApi from '../utils/FetchApi';

function CategoryButtons({ getRecipes, recipeType }) {
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState('');
  const FIVE_CATEGORIES = 5;

  const getCategories = async () => {
    // setLoading(true);
    const responseJson = await fetchApi({
      recipeType,
      filterType: 'list', // nome da chave
      searchInput: 'list',
    });
    setCategories(Object.values(responseJson)[0]);
    // setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section>
      <div>
        <button
          type="button"
          key="all"
          data-testid="All-category-filter"
          value="list"
          onClick={ () => {
            setFiltered('');
            getRecipes();
          } }
        >
          All
        </button>
        {categories.slice(0, FIVE_CATEGORIES).map((get, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${get.strCategory}-category-filter` }
            onClick={ () => {
              if (filtered === get.strCategory) {
                setFiltered('');
                getRecipes();
              } else {
                setFiltered(get.strCategory);
                getRecipes('category', get.strCategory);
              }
            } }
          >
            { get.strCategory }
          </button>
        ))}
      </div>
    </section>
  );
}

CategoryButtons.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipeType: PropTypes.string.isRequired,
  // setLoading: PropTypes.func.isRequired,
};

export default CategoryButtons;
