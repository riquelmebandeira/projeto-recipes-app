import React, { useEffect, useState } from 'react';
import '../styles/mealsAndDrink.css';
import getFoodOrDrink from '../services/data';

function CategoryButton() {
  const [loading, setLoading] = useState(true);
  const [url] = useState(window.location.href);
  const [category, setCategory] = useState([]);

  const FIVE_CATEGORIES = 5;

  useEffect(() => {
    (async () => {
      if (url.includes('comidas')) {
        const response = await getFoodOrDrink(
          'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        );
        setCategory(response.meals);
        setLoading(false);
      } else if (url.includes('bebidas')) {
        const response = await getFoodOrDrink(
          'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
        );
        setCategory(response.drinks);
        setLoading(false);
      }
    })();
  }, []);

  const handleClick = async ({ target }) => {
    const valueBtn = target.value;
    const response = await
    getFoodOrDrink(`www.themealdb.com/api/json/v1/1/search.php?s=${valueBtn}`);
    console.log(response);
  };

  return loading ? (
    <p>Carregando...</p>
  ) : (
    <section>
      <div>
        {category.slice(0, FIVE_CATEGORIES).map((get, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${get.strCategory}-category-filter` }
            value={ get.strCategory }
            onClick={ handleClick }
          >
            {url.includes('comidas') ? get.strCategory : get.strCategory }
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryButton;
