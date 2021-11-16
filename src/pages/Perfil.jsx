import React from 'react';
import { getUserLsData } from '../redux/actions';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  const user = getUserLsData();
  return (
    <>
      <main />
      <h3 data-testid="profile-email">{ user.data.user.email }</h3>
      <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      <button type="button" data-testid="profile-logout-btn">sair</button>
      <section>
        <Header title="Perfil" showSearchBtn={ false } />
        <Footer />
      </section>
    </>
  );
}
