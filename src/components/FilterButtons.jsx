import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default function FilterButtons({ onClick }) {
  return (
    <section>
      <Button
        testid="filter-by-all-btn"
        name="All"
        onClick={ onClick }
      />
      <Button
        testid="filter-by-food-btn"
        name="Food"
        onClick={ onClick }
        id="comida"
      />
      <Button
        testid="filter-by-drink-btn"
        name="Drinks"
        onClick={ onClick }
        id="bebida"
      />
    </section>
  );
}

FilterButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
