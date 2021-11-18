import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareBtn() {
  const [shared, setShared] = useState();
  const shareRecipe = () => {
    setShared(true);
    return navigator.clipboard.writeText(window.location.href);
  };
  return (
    <>
      <input
        type="image"
        src={ shareIcon }
        alt="Ícone de compartilhar"
        data-testid="share-btn"
        onClick={ shareRecipe }
      />
      { shared && <p>Link copiado!</p>}
    </>
  );
}

export default ShareBtn;
