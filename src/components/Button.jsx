import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ name, onClick, testid, disabled, value, id }) {
  return (
    <button
      type="button"
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
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  testid: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  name: 'Botão',
  disabled: false,
  onClick: undefined,
  id: undefined,
  testid: undefined,
  value: undefined,
};
