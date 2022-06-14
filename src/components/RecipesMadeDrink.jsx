import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

export default function RecipeMadeDrink({ recipe, index }) {
  const { image, name, alcoholicOrNot, doneDate, id, type } = recipe;
  return (
    <li className="made-recipe-card" key={ id }>
      <Link
        to={ `${type}s/${id}` }
      >
        <img
          src={ image }
          alt="img"
          className="made-recipe-img"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <section className="made-recipe-info">
        <p
          data-testid={ `${index}-horizontal-top-text` }
          className="category-text"
        >
          {alcoholicOrNot}
        </p>
        <Link
          to={ `${type}s/${id}` }
          data-testid={ `${index}-horizontal-name` }
          className="recipe-name"
        >
          {name}
        </Link>
        <p
          data-testid={ `${index}-horizontal-done-date` }
          className="done-date"
        >
          {doneDate}
        </p>
      </section>
      <ShareButton
        testid={ `${index}-horizontal-share-btn` }
        recipeId={ id }
        recipeType={ type }
      />
    </li>
  );
}

RecipeMadeDrink.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    doneDate: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};
