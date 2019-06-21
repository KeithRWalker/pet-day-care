import React from 'react';
import PropTypes from 'prop-types';
import petShape from '../../helpers/propz/petShape';

import './PetPen.scss';

import Pet from '../pet/pet';

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
      <div className="PetPen d-flex flex-wrap">
        { makePets }
      </div>
    );
  }
}

export default PetPen;
