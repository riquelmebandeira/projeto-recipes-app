import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ name, onClick, testid, disabled }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      data-testid={ testid }
      disabled={ disabled }
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  testid: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  name: 'Botão',
  testid: '',
  onClick: () => {},
  disabled: false,
};
