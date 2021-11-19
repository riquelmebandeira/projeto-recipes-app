import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/shareIcon.svg';

export default function RecipeMadeMeal({ recipe, index }) {
  const { image, name, category, area, doneDate, tags, id, type } = recipe;
  return (
    <Link
      to={ `${type}s/${id}` }
      key={ id }
    >
      <li className="recipeName">
        <img
          src={ image }
          alt="img"
          className="recipeImg"
          data-testid={ `${index}-horizontal-image` }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${area} - ${category}`}
        </p>

        <li
          data-testid={ `${index}-horizontal-name` }
        >
          {name}
        </li>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {doneDate}
        </p>
        <button
          type="button"
        >
          <img
            src={ img }
            data-testid={ `${index}-horizontal-share-btn` }
            alt="icone de compartilhar"
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
    </Link>
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
