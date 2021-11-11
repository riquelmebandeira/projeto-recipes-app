import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

const RecipesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [recipeType, setRecipeType] = useState('');
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipesContext.Provider
      value={ {
        loading,
        recipeType,
        recipes,
        setLoading,
        setRecipeType,
        setRecipes,
      } }
    >
      { children }
    </RecipesContext.Provider>
  );
};

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
