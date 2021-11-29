import PropTypes from 'prop-types';
import React from 'react';

import '../styles/favoriteRecipes.css';

export default function IconButton({ src, onClick, testid }) {
  return (
    <input
      type="image"
      src={ src }
      alt={ testid }
      data-testid={ testid }
      onClick={ onClick }
    />
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  testid: PropTypes.string,
};

IconButton.defaultProps = {
  src: '',
  testid: '',
  onClick: () => {},
};
