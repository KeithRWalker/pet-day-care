import React from 'react';

import PetPen from '../PetPen/PetPen';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <PetPen />
      </div>
    );
  }
}

export default Home;
