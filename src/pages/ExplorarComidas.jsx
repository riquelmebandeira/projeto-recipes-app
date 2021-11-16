import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidas() {
  const history = useHistory();

  const clickIngredients = () => {
    history.push('/explorar/comidas/ingredientes');
  };

  const clickArea = () => {
    history.push('/explorar/comidas/area');
  };

  return (
    <section>
      <Header title="Explorar Comidas" showSearchBtn={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ clickIngredients }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ clickArea }
      >
        Por Local de Origem
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
