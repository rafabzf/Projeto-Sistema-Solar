import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planetCard">
        <div className="img">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
        </div>
        <p data-testid="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
