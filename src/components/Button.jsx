import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ name, onClick, testid }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      data-testid={ testid }
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  testid: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: 'Botão',
  testid: '',
  onClick: () => {},
};
