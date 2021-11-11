import React from 'react';
import PropTypes from 'prop-types';
import '../css/TelasDeDetalhes.css';

function RecommendationCard({ src, category, title, index }) {
  return (
    <div>
      <img
        src={ src }
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
  src: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default RecommendationCard;
