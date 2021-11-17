import React from 'react';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';

export default function ReceitasFavoritas() {
  return (
    <section>
      <Header title="Receitas Favoritas" showSearchBtn={ false } />
      <FilterButtons />
    </section>
  );
}
