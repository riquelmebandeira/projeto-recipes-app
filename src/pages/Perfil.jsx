import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { clearLsData } from '../redux/actions';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/perfil.css';

export default function Perfil() {
  const email = useSelector((state) => state.user.user.email);
  const history = useHistory();

  const redirect = (e) => {
    if (e.value === 'recipe-favorite') {
      history.push('/receitas-favoritas');
    } else if (e.value === 'recipe-done') {
      history.push('/receitas-feitas');
    } else {
      clearLsData();
      history.push('/');
    }
  };

  return (
    <section className="content-container">
      <section>
        <Header title="Perfil" showSearchBtn={ false } />
        <Footer />
      </section>
      <main className="container-main">
        <section className="box">

          <h3
            data-testid="profile-email"
            className="profile-email"
          >
            { email }

          </h3>
          <button
            type="button"
            className="button"
            data-testid="profile-done-btn"
            value="recipe-done"
            onClick={ (e) => redirect(e.target) }
          >
            Receitas Feitas
          </button>
          <button
            type="button"
            className="button"
            data-testid="profile-favorite-btn"
            value="recipe-favorite"
            onClick={ (e) => redirect(e.target) }
          >
            Receitas Favoritas
          </button>
          <button
            type="button"
            className="button"
            data-testid="profile-logout-btn"
            value="exit"
            onClick={ (e) => redirect(e.target) }
          >
            Sair
          </button>
        </section>
      </main>
    </section>
  );
}
