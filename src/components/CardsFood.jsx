import React, { useEffect, useState } from 'react';
import '../styles/mealsAndDrink.css';
import getFoodOrDrink from '../services/data';

function CardsFood() {
  // const [loading, setLoading] = useState(true);
  // const [mealsOrDrink, setMealsOrDrink] = useState([]);
  // const [url] = useState(window.location.href);
  // const TWELVE_MEALSORDRINK = 12;

  // useEffect(() => {
  //   (async () => {
  //     if (url.includes('comidas')) {
  //       const response = await getFoodOrDrink(
  //         'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  //       );
  //       setMealsOrDrink(response.meals);
  //       setLoading(false);
  //     } else if (url.includes('bebidas')) {
  //       const response = await getFoodOrDrink(
  //         'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  //       );
  //       setMealsOrDrink(response.drinks);
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  return loading ? (
    <p>Carregando...</p>
  ) : (
    <section>
      <div>
        {mealsOrDrink.slice(0, TWELVE_MEALSORDRINK).map((get, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ url.includes('comidas') ? get.strMealThumb : get.strDrinkThumb }
              alt="img"
              className="imgCard"
              data-testid={ `${index}-card-img` }
            />
            <li
              className="nameMeals"
              data-testid={ `${index}-card-name` }
            >
              {url.includes('comidas') ? get.strMeal : get.strDrink}
            </li>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsFood;
