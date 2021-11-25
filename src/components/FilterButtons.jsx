import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

import '../styles/feceitasfeitasFavoritas.css';

export default function FilterButtons({ onClick }) {
  return (
    <section className="btn-filter-container">
      <Button
        testid="filter-by-all-btn"
        name="All"
        value=""
        onClick={ onClick }
        classNameBTN="btn-filter"
      />
      <Button
        testid="filter-by-food-btn"
        name="Food"
        value="comida"
        className="btn-filter"
        classNameBTN={ onClick }
      />
      <Button
        testid="filter-by-drink-btn"
        name="Drinks"
        classNameBTN="btn-filter"
        value="bebida"
        onClick={ onClick }
      />
    </section>
  );
}

FilterButtons.propTypes = {
  onClick: PropTypes.func,
};

FilterButtons.defaultProps = {
  onClick: () => {},
};
