import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

import '../styles/ReceitasFeitas.css';

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
        onClick={ onClick }
        classNameBTN="btn-filter"
      />
      <Button
        testid="filter-by-drink-btn"
        name="Drinks"
        value="bebida"
        onClick={ onClick }
        classNameBTN="btn-filter"
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
