import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  const history = useHistory();

  const clickFood = () => {
    history.push('/explorar/comidas');
  };

  const clickDrinks = () => {
    history.push('/explorar/bebidas');
  };

  return (
    <section>
      <Header title="Explorar" showSearchBtn={ false } />
      <button
        type="button"
        name="comidas"
        onClick={ clickFood }
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        name="bebidas"
        onClick={ clickDrinks }
        data-testid="explore-drinks"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </section>
  );
}
