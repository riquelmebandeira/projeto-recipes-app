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

  const fetchAPIRandomFoods = async () => {
    const foodSurpriseAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(foodSurpriseAPI);
    const data = await response.json();
    return data;
  };

  const clickSurprise = async () => {
    const getAPI = await fetchAPIRandomFoods();
    history.push(`/comidas/${Object.values(getAPI)[0][0].idMeal}`);
  };

  return (
    <>
      <Header
        title="Explorar Comidas"
        showSearchBtn={ false }
        className="alternative-header"
      />
      <main className="explore-page-container">
        <section className="explore-options">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            onClick={ clickIngredients }
            className="button"
          >
            Por Ingredientes
          </button>
          <button
            type="button"
            data-testid="explore-by-area"
            onClick={ clickArea }
            className="button"
          >
            Por Local de Origem
          </button>
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ clickSurprise }
            className="button"
          >
            Me Surpreenda!
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
