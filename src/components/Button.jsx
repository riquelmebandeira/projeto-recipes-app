import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ name, onClick, testid, disabled, value }) {
  return (
    <button
      type="button"
      id={ id }
      onClick={ onClick }
      data-testid={ testid }
      disabled={ disabled }
      value={ value }
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  name: 'Botão',
  testid: '',
  onClick: () => {},
  disabled: false,
  value: '',
};
