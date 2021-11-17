import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Router from './services/Router';
import RecipesProvider from './context/RecipesProvider';
import { initLsData } from './redux/actions';

function App() {
  // hydrate Redux store from localStorage
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initLsData());
  }, [dispatch]);

  return (
    <RecipesProvider>
      <Router />
    </RecipesProvider>
  );
}

export default App;
