import PropTypes from 'prop-types';
import React from 'react';
import '../styles/mealsAndDrink.css';

function CategoryButton({ recipes, handleClick }) {
  const FIVE_CATEGORIES = 5;

  return (
    <section>
      <div>
        <button
          type="button"
          key="all"
          data-testid="all-category-filter"
          value="list"
          onClick={ handleClick }
        >
          All
        </button>
        {recipes.slice(0, FIVE_CATEGORIES).map((get, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${get.strCategory}-category-filter` }
            value={ get.strCategory }
            onClick={ handleClick }
          >
            { get.strCategory }
          </button>
        ))}
      </div>
    </section>
  );
}

CategoryButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryButton;
