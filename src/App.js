import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './services/Router';
import RecipesProvider from './context/RecipesProvider';
import { loadLsData } from './redux/actions';
import './App.css';

function App() {
  // hydrate Redux store from localStorage
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLsData());
  }, [dispatch]);

  return (
    <RecipesProvider>
      <Router />
    </RecipesProvider>
  );
}

export default App;
