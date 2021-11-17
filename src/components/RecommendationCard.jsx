import React from 'react';
import PropTypes from 'prop-types';
import '../styles/detailsPage.css';

function RecommendationCard({ recipe, index }) {
  const { thumbnail, category, title } = recipe;
  return (
    <div className="recommendation-card">
      <img
        src={ thumbnail }
        alt="Foto da receita"
        data-testid={ `${index}-recomendation-card` }
        className="card-photo"
      />
      <p>{category}</p>
      <h3 data-testid={ `${index}-recomendation-title` }>{title}</h3>
    </div>
  );
}

RecommendationCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecommendationCard;
