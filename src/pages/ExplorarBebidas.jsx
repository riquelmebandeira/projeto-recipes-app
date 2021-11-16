import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarBebidas() {
  return (
    <section>
      <Header title="Explorar Bebidas" showSearchBtn={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </section>
  );
}
