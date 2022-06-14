import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/Explorar.css';

export default function Explorar() {
  const history = useHistory();

  const clickFoods = () => {
    history.push('/explorar/comidas');
  };

  const clickDrinks = () => {
    history.push('/explorar/bebidas');
  };

  return (
    <>
      <Header title="Explorar" showSearchBtn={ false } className="alternative-header" />
      <main className="explore-page-container">
        <section className="explore-options">
          <button
            type="button"
            name="comidas"
            onClick={ clickFoods }
            data-testid="explore-food"
            className="button"
          >
            Explorar Comidas
          </button>
          <button
            type="button"
            name="bebidas"
            onClick={ clickDrinks }
            data-testid="explore-drinks"
            className="button"
          >
            Explorar Bebidas
          </button>
        </section>
        <Footer />
      </main>
    </>
  );
}
