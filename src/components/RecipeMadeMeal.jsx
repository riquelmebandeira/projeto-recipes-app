import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareBtn from './ShareBtn';

export default function RecipeMadeMeal({ recipe, index }) {
  const { image, name, category, area, doneDate, tags, id, type } = recipe;
  return (

    <li className="recipeNamee" key={ id }>
      <Link
        to={ `${type}s/${id}` }
      >
        <img
          src={ image }
          alt="img"
          className="recipeImgg"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <section className="division-btn-names">
        <section>
          <p
            data-testid={ `${index}-horizontal-top-text` }
            className="txt"
          >
            {`${area} - ${category}`}
          </p>

          <Link
            to={ `${type}s/${id}` }
            data-testid={ `${index}-horizontal-name` }
            className="txt"
          >
            {name}
          </Link>
          <p
            data-testid={ `${index}-horizontal-done-date` }
            className="txt"
          >
            {doneDate}
          </p>
          <p
            className="txt"
          >
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
        </section>
        <button
          type="button"
          className="btn-copy"
        >
          <ShareBtn
            testid={ `${index}-horizontal-share-btn` }
            recipeId={ id }
            recipeType={ type }
          />
        </button>
      </section>
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
