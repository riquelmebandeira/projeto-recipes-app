import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getRecipeURL } from '../utils/recipeInfo';
import shareIcon from '../images/shareIcon.svg';
import IconButton from './IconButton';

const copy = require('clipboard-copy');

export default function ShareButton({ recipeId, testid }) {
  const [urlCopied, setUrlCopied] = useState(false);

  const shareRecipe = () => {
    const THREE_SECONDS = 3000;
    copy(getRecipeURL(recipeId));
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), THREE_SECONDS);
  };

  return urlCopied ? <div>Link copiado!</div> : (
    <IconButton
      name="Compartilhar"
      src={ shareIcon }
      onClick={ () => shareRecipe() }
      testid={ testid }
    />
  );
}

ShareButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
  testid: PropTypes.string,
};

ShareButton.defaultProps = {
  testid: 'share-btn',
};
