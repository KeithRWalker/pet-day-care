import React from 'react';

import petShape from '../../helpers/propz/petShape';

import './Pet.scss';

class Pet extends React.Component {
  static propTypes = {
    pet: petShape.petShape,
  }

  render() {
    const { pet } = this.props;
    const imgAlt = `An Animal named ${pet.name}`;
    return (
          <div className="row pet-card">

          <div className="pet-img-con">
            <h4 className="pet-name">{pet.name}</h4>
            <img className="pet-img" src={pet.img} alt={imgAlt}/>
          </div>

          <div className="col">
            <div className="col pet-info">
              <strong className="subtitle">Info:</strong><br/>

              <div className="pet-info-text">
                <div><strong>Owner:</strong> {pet.owner}</div>
                <div><strong>Type:</strong> {pet.type}</div>
                <div><strong>Sex:</strong> {pet.sex}</div>
                <div><strong>Color:</strong> {pet.color}</div>
                <div><strong>Weight:</strong> {pet.weight}</div>
                <div><strong>Species:</strong> {pet.species}</div>
              </div>

            </div>
          </div>

          <div className="col">
            <div className="col pet-notes">
              <strong className="subtitle">Notes:</strong><br/>

              <div className="pet-notes-text"><br/>{pet.notes}</div>

            </div>
          </div>

          </div>
    );
  }
}

export default Pet;
