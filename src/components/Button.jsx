import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ name, onClick, testid, disabled, id }) {
  return (
    <button
      type="button"
      id={ id }
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
  id: PropTypes.string,
};

Button.defaultProps = {
  name: 'Botão',
  testid: '',
  onClick: () => {},
  disabled: false,
  id: '',
};
