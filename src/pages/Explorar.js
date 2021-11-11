import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  const history = useHistory();

  const handleClick = () => {
    const click = ({ target: { name } }) => {
      history.push(`/explorar/${name}`);
    };
    return click();
  };

  return (
    <section>
      <Header title="Explorar" showSearchBtn={ false } />
      <button
        type="button"
        name="comidas"
        onClick={ handleClick }
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        name="bebidas"
        onClick={ handleClick }
        data-testid="explore-drinks"
      >
        Explorar bebidas
      </button>
      <Footer />
    </section>
  );
}
