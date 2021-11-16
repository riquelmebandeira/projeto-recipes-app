import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidas() {
  return (
    <section>
      <Header title="Explorar Comidas" showSearchBtn={ false } />
      <Footer />
    </section>
  );
}
