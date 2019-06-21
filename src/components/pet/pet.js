import React from 'react';

import petShape from '../../helpers/propz/petShape';

import './pet.scss';

class Pet extends React.Component {
  static propTypes = {
    pet: petShape.petShape,
  }

  render() {
    const { pet } = this.props;
    const imgAlt = `An Animal named ${pet.name}`;
    return (
      <div className="Pet col-3">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pet.img} className="card-img-top" alt={imgAlt}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <li>id:{pet.id}</li>
                  <li>type: {pet.type}</li>
                  <li>species: {pet.species}</li>
                  <li>sex: {pet.sex}</li>
                  <li>color: {pet.color}</li>
                  <li>owner: {pet.owner}</li>
                  <li>weight: {pet.weight}</li>
                  <li>notes: {pet.notes}</li>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
