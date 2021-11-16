import React from 'react';
import { useHistory } from 'react-router';
import { getUserLsData } from '../redux/actions';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  const user = getUserLsData();
  const history = useHistory();

  const redirect = (e) => (
    e.value === 'recipe-favorete'
      ? history.push('/receitas-favoritas') : history.push('/receitas-feitas')
  );

  return (
    <>
      <main />
      <h3 data-testid="profile-email">{ user.data.user.email }</h3>
      <button
        type="button"
        data-testid="profile-done-btn"
        value="recipe-done"
        onClick={ (e) => redirect(e.target) }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        value="recipe-favorete"
        onClick={ (e) => redirect(e.target) }
      >
        Receitas Favoritas
      </button>
      <button type="button" data-testid="profile-logout-btn">Sair</button>
      <section>
        <Header title="Perfil" showSearchBtn={ false } />
        <Footer />
      </section>
    </>
  );
}
