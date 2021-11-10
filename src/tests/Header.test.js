import React from 'react';

import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

const PROFILE_TOP_BTN = 'profile-top-btn';
// const PAGE_TITLE = 'page-title';
// const SEARCH_TOP_BTN = 'search-top-btn';

// # Testes para o componente Header
// - Não tem header na tela de login
// - O header tem os ícones corretos na tela de principal de receitas de comidas
// - O header tem os ícones corretos na tela de principal de receitas de bebidas
// - Não tem header na tela de detalhes de uma receita de comida
// - Não tem header na tela de detalhes de uma receita de bebida
// - Não tem header na tela de receita em processo de comida
// - Não tem header na tela de receita em processo de bebida
// - O header tem os ícones corretos na tela de explorar
// - O header tem os ícones corretos na tela de explorar comidas
// - O header tem os ícones corretos na tela de explorar bebidas
// - O header tem os ícones corretos na tela de explorar comidas por ingrediente
// - O header tem os ícones corretos na tela de explorar bebidas por ingrediente
// - O header tem os ícones corretos na tela de explorar comidas por local de origem
// - O header tem os ícones corretos na tela de perfil
// - O header tem os ícones corretos na tela de receitas feitas
// - O header tem os ícones corretos na tela de receitas favoritas
describe('Componente Header - Integração no app', () => {
  test('Não tem header na tela de login', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    expect(getByTestId(PROFILE_TOP_BTN)).toBeNull();
  });
  test('O header tem os ícones corretos '
  + 'na tela de principal de receitas de comidas', () => {});
});
