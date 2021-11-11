import React from 'react';
import Button from '../components/Button';

export default function Progresso() {
  const title = 'Receita em Progresso';
  const category = 'Categoria';
  return (
    <section>
      <img
        src=""
        alt="Foto da receita em progresso"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ title }</h1>
      <h2 data-testid="recipe-category">{ category }</h2>
      <Button text="Compartilhar" testid="share-btn" />
      <Button text="Favoritar" testid="favorite-btn" />
      <p data-testid="instructions">Instruções</p>
      <Button text="Finalizar Receita" testid="finish-recipe-btn" />
    </section>
  );
}
