import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarBebidas() {
  const history = useHistory();

  const clickIngredients = () => {
    history.push('/explorar/bebidas/ingredientes');
  };

  const fetchAPIRandomDrinks = async () => {
    const drinkSurpriseAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(drinkSurpriseAPI);
    const data = await response.json();
    return data;
  };

  const clickSurprise = async () => {
    const getAPI = await fetchAPIRandomDrinks();
    history.push(`/bebidas/${Object.values(getAPI)[0][0].idDrink}`);
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
        onClick={ clickSurprise }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </section>
  );
}
