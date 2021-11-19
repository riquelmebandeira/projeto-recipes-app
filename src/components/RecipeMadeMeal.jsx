import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/shareIcon.svg';
import ShareBtn from './ShareBtn';

export default function RecipeMadeMeal({ recipe, index }) {
  const { image, name, category, area, doneDate, tags, id, type } = recipe;
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
        {`${area} - ${category}`}
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
      <p>
        {
          tags.slice(0, 2).map((tag) => (
            <span
              key={ tag }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </span>
          ))
        }
      </p>
    </li>
  );
}

RecipeMadeMeal.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    area: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
