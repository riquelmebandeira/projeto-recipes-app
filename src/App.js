import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import Router from './services/Router';

function App() {
  return (
    <>
      <Router />
      <SearchBar />
    </>
  );
}

export default App;
