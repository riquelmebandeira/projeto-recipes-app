import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helper/renderWithRouterAndRedux';

import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_SUBMIT_BTN = 'login-submit-btn';

const CORRECT_EMAIL = 'contato@gmail.com';

describe('Tela de Loging - Avalia o que aparece na tela para o usuario', () => {
  beforeEach(() => renderWithRouterAndRedux(<App />));
  test('Verifica se existe o texto "Login"', () => {
    const textLogin = screen.getByRole('heading', {
      level: 1,
      name: /login/i,
    });
    expect(textLogin).toBeInTheDocument();
  });

  test('Verifica se os inputs estão sendo renderizados'
    + 'e se estão recebendo dados validos', () => {
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);

    expect(inputEmail).toBeInTheDocument();
    // Verifica se o input recebe entrada de dados
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, CORRECT_EMAIL);
    expect(inputEmail).toHaveValue(CORRECT_EMAIL);
    expect(inputEmail.type).toBe('email');

    expect(inputSenha).toBeInTheDocument();
    expect(inputSenha).toHaveValue('');
    userEvent.type(inputSenha, '1234567');
    expect(inputSenha).toHaveValue('1234567');
    expect(inputSenha.type).toBe('password');
  });

  test('Verifica se o botão esta sendo renderizado ', () => {
    const searchButton = screen.getByRole('button', {
      name: 'Entrar',
    });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton.type).toBe('button');
  });

  test('O botão deve estar desativado se o email for inválido', () => {
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const submitBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    expect(submitBtn).toBeDisabled();

    userEvent.type(inputEmail, 'contato@email');
    userEvent.type(inputSenha, '1234567');
    expect(submitBtn).toBeDisabled();

    userEvent.type(inputEmail, 'email.com');
    expect(submitBtn).toBeDisabled();
  });

  test('O botão deve estar desativado se a senha tiver 6 ou menos caracteres', () => {
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const submitBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    expect(submitBtn).toBeDisabled();

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputSenha, '123456');
    expect(submitBtn).toBeDisabled();
  });

  test('O botão deve estar ativado se email e a senha dorem válidos', () => {
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const submitBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    expect(submitBtn).toBeDisabled();

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputSenha, '1234567');

    expect(submitBtn).not.toBeDisabled();
  });
});

describe('Tela de Loging - Avalia o localStorage após a submição', () => {
  beforeEach(() => {
    localStorage.clear();
    renderWithRouterAndRedux(<App />);
  });

  test(`Avalia se 2 tokens estão sendo salvos no
    localStorage após a submição'`, () => {
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const submitBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    let mealsToken = localStorage.getItem('mealsToken');
    let cocktailsToken = localStorage.getItem('cocktailsToken');
    expect(mealsToken).toBe(null);
    expect(cocktailsToken).toBe(null);

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputSenha, '1234567');

    userEvent.click(submitBtn);

    mealsToken = localStorage.getItem('mealsToken');
    cocktailsToken = localStorage.getItem('cocktailsToken');
    expect(mealsToken).toBe('1');
    expect(cocktailsToken).toBe('1');
  });

  test('Avalia se após a submissão achave user esta salva no localStorage', () => {
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const submitBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    expect(submitBtn).toBeDisabled();

    let user = localStorage.getItem('user');
    expect(user).toBe(null);

<<<<<<< Updated upstream
    userEvent.type(inputEmail, CORRECT_EMAIL);
=======
    userEvent.type(inputEmail, 'contato@gmail.com');
>>>>>>> Stashed changes
    userEvent.type(inputSenha, '1234567');
    userEvent.click(submitBtn);

    user = JSON.parse(localStorage.getItem('user'));
<<<<<<< Updated upstream
    expect(user.email).toBe(CORRECT_EMAIL);
=======
    expect(user.email).toBe('contato@gmail.com');
>>>>>>> Stashed changes
  });
});

describe(`Avalia se o usuario é redirecionada para
  a tela principal de receitas de comidas após a submição com sucesso do login`, () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('A rota muda para a tela principal de receitas de comidas', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const submitBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    expect(submitBtn).toBeDisabled();

    const user = localStorage.getItem('user');
    expect(user).toBe(null);

    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputSenha, '1234567');
    userEvent.click(submitBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas');
  });
});
