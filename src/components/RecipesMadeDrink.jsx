import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../images/shareIcon.svg';
import ShareBtn from './ShareBtn';

export default function RecipeMadeDrink({ recipe, index }) {
  const { image, name, alcoholicOrNot, doneDate, id, type } = recipe;
  return (
    <li className="recipeName" key={ id }>
      <Link
        to={ `${type}s/${id}` }
      >
        <img
          src={ image }
          alt="img"
          className="recipeImg"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {alcoholicOrNot}
      </p>
      <Link
        to={ `${type}s/${id}` }
        data-testid={ `${index}-horizontal-name` }
      >
        {name}
      </Link>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        {doneDate}
      </p>
      <button
        type="button"
      >
        <ShareBtn
          testid={ `${index}-horizontal-share-btn` }
          recipeId={ id }
          recipeType={ type }
        />
      </button>
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
