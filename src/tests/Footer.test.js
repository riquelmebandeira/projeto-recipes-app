import React from 'react';

import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import renderWithRouterAndRedux from './helper/renderWithRouterAndRedux';
import App from '../App';

const FOOTER = 'footer';
const DRINKS_BTN = 'drinks-bottom-btn';
const EXPLORE_BTN = 'explore-bottom-btn';
const FOOD_BTN = 'food-bottom-btn';

describe('Componente Footer - Aparência', () => {
  beforeEach(() => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');
  });

  test('Tem o ícone da página de drinks', () => {
    const drinksBtn = screen.getByTestId(DRINKS_BTN);
    expect(drinksBtn.src).toContain('drinkIcon.svg');
  });

  test('Tem o ícone da página de explorar', () => {
    const exploreBtn = screen.getByTestId(EXPLORE_BTN);
    expect(exploreBtn.src).toContain('exploreIcon.svg');
  });

  test('Tem o ícone da página de comidas', () => {
    const foodBtn = screen.getByTestId(FOOD_BTN);
    expect(foodBtn.src).toContain('mealIcon.svg');
  });
});

describe('Componente Footer - Integração no app', () => {
  test('Não tem footer na tela de login', () => {
    renderWithRouterAndRedux(<App />);
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Tem footer na tela de principal de receitas de comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de principal de receitas de bebidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Não tem footer na tela de detalhes de uma receita de comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas/1');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de detalhes de uma receita de bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/1');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de receita em processo de comida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/comidas/1/in-progress');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de receita em processo de bebida', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/bebidas/1/in-progress');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Tem footer na tela de explorar', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar bebidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/bebidas');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar comidas por ingrediente', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas/ingredientes');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar bebidas por ingrediente', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/bebidas/ingredientes');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de explorar comidas por local de origem', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/explorar/comidas/area');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Tem footer na tela de perfil', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });

  test('Não tem footer na tela de receitas feitas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/receitas-feitas');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });

  test('Não tem footer na tela de receitas favoritas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/receitas-favoritas');
    const footerElement = screen.queryByTestId(FOOTER);
    expect(footerElement).not.toBeInTheDocument();
  });
});

describe('Componente Footer - Comportamento', () => {
  test('Redireciona para a lista de bebidas ao clicar no ícone de bebidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');
    const drinksBtn = screen.getByTestId(DRINKS_BTN);
    fireEvent.click(drinksBtn);
    expect(history.location.pathname).toBe('/bebidas');
  });

  test('Redireciona para a tela de explorar ao clicar no ícone de exploração', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');
    const exploreBtn = screen.getByTestId(EXPLORE_BTN);
    fireEvent.click(exploreBtn);
    expect(history.location.pathname).toBe('/explorar');
  });

  test('Redireciona para a lista de comidas ao clicar no ícone de comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/perfil');
    const foodBtn = screen.getByTestId(FOOD_BTN);
    fireEvent.click(foodBtn);
    expect(history.location.pathname).toBe('/comidas');
  });
});
