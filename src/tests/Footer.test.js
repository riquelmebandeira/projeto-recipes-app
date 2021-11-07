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
  beforeEach(() => renderWithRouter(<App />));

  it('Aparece em todas as telas do app', () => {
    const footerElement = screen.getByTestId(FOOTER);
    expect(footerElement).toBeInTheDocument();
  });
});
