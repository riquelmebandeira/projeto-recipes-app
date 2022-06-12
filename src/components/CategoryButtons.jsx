import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../redux/actions';
import '../styles/mealsAndDrink.css';
import fetchApi from '../utils/FetchApi';
import { getRecipeType } from '../utils/recipeInfo';
import '../styles/Login.css';

function CategoryButtons() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState('');
  const FIVE_CATEGORIES = 5;
  const recipeType = getRecipeType();
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
  }, []);

  return (
    <section className="category-buttons">
      <div>
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
      </div>
    </section>
  );
}

export default CategoryButtons;
