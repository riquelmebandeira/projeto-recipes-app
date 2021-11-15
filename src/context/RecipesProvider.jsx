import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchApi from '../utils/FetchApi';
import RecipesContext from './RecipesContext';

const RecipesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [recipeType, setRecipeType] = useState('comida');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (options = {}) => {
    setLoading(true);
    const json = await fetchApi(options);
    setRecipes(Object.values(json)[0]);
    setLoading(false);
  };

  useEffect(() => {
    getRecipes();
  }, []);

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
