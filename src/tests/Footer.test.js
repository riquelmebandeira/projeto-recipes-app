import React from 'react';

import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

const FOOTER = 'footer';
const DRINKS_BTN = 'drinks-bottom-btn';
const EXPLORE_BTN = 'explore-bottom-btn';
const FOOD_BTN = 'food-bottom-btn';

describe('Componente Footer - Comportamento', () => {
  beforeEach(() => render(<Footer />));

  test('Tem um link para a página de drinks', () => {
    const drinksBtn = screen.getByTestId(DRINKS_BTN);
    expect(drinksBtn.src).toContain('drinkIcon.svg');
  });

  test('Tem um link para a página de explorar', () => {
    const exploreBtn = screen.getByTestId(EXPLORE_BTN);
    expect(exploreBtn.src).toContain('exploreIcon.svg');
  });

  test('Tem um link para a página de comidas', () => {
    const foodBtn = screen.getByTestId(FOOD_BTN);
    expect(foodBtn.src).toContain('mealIcon.svg');
  });
});

describe('Componente Footer - Integração no app', () => {
  test('Não tem footer na tela de login', () => {
    renderWithRouter(<App />);
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Tem footer na tela de principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de principal de receitas de bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Não tem footer na tela de detalhes de uma receita de comida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas/1');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de detalhes de uma receita de bebida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas/1');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de receita em processo de comida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas/1/in-progress');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de receita em processo de bebida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas/1/in-progress');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Tem footer na tela de explorar', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/comidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/bebidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar comidas por ingrediente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/comidas/ingredientes');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar bebidas por ingrediente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/bebidas/ingredientes');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar comidas por local de origem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar/comidas/area');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de perfil', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Não tem footer na tela de receitas feitas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/receitas-feitas');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de receitas favoritas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/receitas-favoritas');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });
});
