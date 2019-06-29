import React from 'react';

import petData from '../../helpers/data/petData';

import Pet from '../Pet/Pet';

import './PetPen.scss';

class PetPen extends React.Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    petData.getPets()
      .then(pets => this.setState({ pets }))
      .catch(err => console.error('error from PetPen.js', err));
  }

  render() {
    const petComponents = this.state.pets.map(pet => (
        <Pet key={pet.name} pet={pet} />
    ));

    return (
      <div className="PetPen">
        <div className="pet-pen-title">The Pets We Watch!</div>
        {petComponents}
      </div>
    );
  }
}

export default PetPen;
