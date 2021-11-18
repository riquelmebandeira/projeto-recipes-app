import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import '../styles/mealsAndDrink.css';
import img from '../images/shareIcon.svg';

export default function ReceitasFeitas() {
  const doneRecipes = useSelector((state) => state.recipes.doneRecipes);
  const [filterType, setFilterType] = useState('');
  // console.log('done', doneRecipes);

  const changeFilterType = ({ target }) => {
    setFilterType(target.value);
  };

  return (
    <>
      <Header title="Receitas Feitas" showSearchBtn={ false } />
      <FilterButtons onClick={ changeFilterType } />
      <section>
        {
          doneRecipes.filter(({ type }) => type.includes(filterType))
            .map(({ image, name, category, area, doneDate, tags, id, type }, index) => (
              <Link
                to={ `${type}s/${id}` }
                key={ id }
              >
                <li className="recipeName">
                  {
                    console.log('tag', tags, typeof tags, type)
                  }
                  <img
                    src={ image }
                    alt="img"
                    className="recipeImg"
                    data-testid={ `${index}-horizontal-image` }
                  />
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    {category}
                  </p>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    {area}
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
                    data-testid={ `${index}-horizontal-share-btn` }
                  >
                    <img src={ img } alt="icone de compartilhar" />
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
            ))
        }
      </section>
    </>
  );
}
