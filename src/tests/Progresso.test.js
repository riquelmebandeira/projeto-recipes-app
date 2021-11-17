import React from 'react';
import { render } from '@testing-library/react';
import Progresso from '../pages/Progresso';

describe('Páginas de Receita em Progresso - Estrutura', () => {
//   Verifica se os atributos data-testid estão presentes na tela com suas respectivas quantidades:

  // A foto deve possuir o atributo data-testid="recipe-photo";
  // O título deve possuir o atributo data-testid="recipe-title";
  // O botão de compartilhar deve possuir o atributo data-testid="share-btn";
  // O botão de favoritar deve possuir o atributo data-testid="favorite-btn";
  // O texto da categoria deve possuir o atributo data-testid="recipe-category";
  // Os ingredientes devem possuir o atributo data-testid=${index}-ingredient-step, a verificação será feita pelo length do atributo.
  // O elemento de instruções deve possuir o atributo data-testid="instructions";
  // O botão para finalizar a receita deve possuir o atributo data-testid="finish-recipe-btn".

  it('Verifica se os atributos data-testid '
  + 'estão presentes na tela com suas respectivas quantidades:', () => {
    const { getByTestId } = render(<Progresso />);
    expect(getByTestId('recipe-photo')).toBeTruthy();
    expect(getByTestId('recipe-title')).toBeTruthy();
    expect(getByTestId('share-btn')).toBeTruthy();
    expect(getByTestId('favorite-btn')).toBeTruthy();
    expect(getByTestId('recipe-category')).toBeTruthy();
    expect(getByTestId('instructions')).toBeTruthy();
    expect(getByTestId('finish-recipe-btn')).toBeTruthy();
  });
});
