import React from 'react';
import '../styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer>
      <nav data-testid="footer" aria-label="Footer">
        <img
          data-testid="drinks-bottom-btn"
          type="button"
          src={ drinkIcon }
          alt="Drinks"
        />
        <img
          data-testid="explore-bottom-btn"
          type="button"
          src={ exploreIcon }
          alt="Explore"
        />
        <img
          data-testid="food-bottom-btn"
          type="button"
          src={ mealIcon }
          alt="Food"
        />
      </nav>
    </footer>
  );
}
