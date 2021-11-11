import React from 'react';
import './App.css';
import Router from './services/Router';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <Router />
    </RecipesProvider>
  );
}

export default App;
