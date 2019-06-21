import React from 'react';

import myPets from './pets';
import PetPen from '../components/PetPen/PetPen';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    pets: [],
  }

  componentDidMount() {
    this.setState({ pets: myPets });
  }

  render() {
    const { pets } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          {/* <div className="row"> */}
            {/* <div className="col-lg-12"> */}
              <PetPen pets={pets}/>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default App;
