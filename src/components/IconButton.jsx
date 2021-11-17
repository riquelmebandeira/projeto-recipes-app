import PropTypes from 'prop-types';
import React from 'react';

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
  src: PropTypes.string,
  testid: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  src: '',
  testid: '',
  onClick: () => {},
};
