import React from 'react';

export default function Footer() {
  return (
    <footer>
      <nav data-testid="footer" aria-label="Footer">
        <button
          data-testid="drinks-bottom-btn"
          type="button"
          aria-label="Drinks"
        >
          <span>Drinks</span>
        </button>
        <button
          data-testid="explore-bottom-btn"
          type="button"
          aria-label="Explore"
        >
          <span>Explore</span>
        </button>
        <button
          data-testid="food-bottom-btn"
          type="button"
          aria-label="Food"
        >
          <span>Food</span>
        </button>
      </nav>
    </footer>
  );
}
