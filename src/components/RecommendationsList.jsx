import React from 'react';
import PropTypes from 'prop-types';
import RecommendationCard from './RecommendationCard';

function RecommendationsList({ recommendations }) {
  const MAX_LENGTH = 6;
  return (
    <section className="recommendations">
      <h2>Recomendadas</h2>
      <div className="cards-container">
        {
          recommendations.slice(0, MAX_LENGTH).map(
            (recipe, index) => (
              <RecommendationCard key={ index } { ...{ recipe, index } } />),
          )
        }
      </div>
    </section>
  );
}

RecommendationsList.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecommendationsList;
