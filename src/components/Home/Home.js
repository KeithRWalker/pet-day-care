import React from 'react';

import PetPen from '../PetPen/PetPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import Walks from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="col walks-con">
          <Walks />
        </div>
        <div className="row info-con">
          <PetPen />
          <StaffRoom />
        </div>
      </div>
    );
  }
}

export default Home;
