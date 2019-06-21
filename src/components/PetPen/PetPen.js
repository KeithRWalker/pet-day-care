import React from 'react';
import PropTypes from 'prop-types';
import petShape from '../../helpers/propz/petShape';
import Pet from '../Pet/Pet';

import './PetPen.scss';

class PetPen extends React.Component {
  static propTypes = {
    pets: PropTypes.arrayOf(petShape.petShape),
  };

  render() {
    const { pets } = this.props;
    const makePets = pets.map(pet => (
        <Pet key={pet.id} pet={pet} />
    ));
    return (
      <div className="pet-pen">
        <div className="pet-pen-title">The Pets We Watch!</div>
        { makePets }
      </div>
    );
  }
}

export default PetPen;
