import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default function FilterButtons({ onClick }) {
  return (
    <section>
      <Button
        testid="filter-by-all-btn"
        name="All"
        value=""
        onClick={ onClick }
      />
      <Button
        testid="filter-by-food-btn"
        name="Food"
        value="comida"
        onClick={ onClick }

      />
      <Button
        testid="filter-by-drink-btn"
        name="Drinks"
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
