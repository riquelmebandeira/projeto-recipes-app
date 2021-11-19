import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareBtn({ testid, recipeId, recipeType }) {
  const [shared, setShared] = useState();
  const shareRecipe = () => {
    setShared(true);
    return navigator.clipboard.writeText(
      `${window.location.origin}/${recipeType}s/${recipeId}`,
    );
  };
  return (
    <>
      <input
        type="image"
        src={ shareIcon }
        alt="Ícone de compartilhar"
        data-testid={ testid }
        onClick={ shareRecipe }
      />
      { shared && <p>Link copiado!</p>}
    </>
  );
}

ShareBtn.propTypes = {
  recipeId: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  testid: PropTypes.string,
};

ShareBtn.defaultProps = {
  testid: 'share-btn',
};

export default ShareBtn;
