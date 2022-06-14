import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

export default function RecipeMadeMeal({ recipe, index }) {
  const { image, name, category, area, doneDate, tags, id, type } = recipe;
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
          {`${area} - ${category}`}
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
        <p
          className="recipe-tags"
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
      <ShareButton
        testid={ `${index}-horizontal-share-btn` }
        recipeId={ id }
        recipeType={ type }
      />
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
