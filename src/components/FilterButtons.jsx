import React from 'react';
import Button from './Button';

export default function FilterButtons() {
  return (
    <section>
      <Button
        testid="filter-by-all-btn"
        name="All"
      />
      <Button
        testid="filter-by-food-btn"
        name="Food"
      />
      <Button
        testid="filter-by-drink-btn"
        name="Drinks"
      />
    </section>
  );
}
