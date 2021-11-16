import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarBebidas() {
  const history = useHistory();

  const clickIngredients = () => {
    history.push('/explorar/bebidas/ingredientes');
  };

  return (
    <section>
      <Header title="Explorar Bebidas" showSearchBtn={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ clickIngredients }
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
