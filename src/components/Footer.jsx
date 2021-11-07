import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer>
      <nav data-testid="footer" aria-label="Footer">
        <Link to="/bebidas">
          <img
            data-testid="drinks-bottom-btn"
            type="button"
            src={ drinkIcon }
            alt="Drinks"
          />
        </Link>
        <Link to="/explorar">
          <img
            data-testid="explore-bottom-btn"
            type="button"
            src={ exploreIcon }
            alt="Explore"
          />
        </Link>
        <Link to="/comidas">
          <img
            data-testid="food-bottom-btn"
            type="button"
            src={ mealIcon }
            alt="Food"
          />
        </Link>
      </nav>
    </footer>
  );
}
