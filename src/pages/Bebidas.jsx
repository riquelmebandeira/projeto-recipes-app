import React from 'react';
import CardsFood from '../components/CardsFood';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButton from '../components/CategoryButton';

export default function Bebidas() {
  return (
    <section>
      <Header title="Bebidas" />
      <CategoryButton />
      <CardsFood />
      <Footer />
    </section>
  );
}
