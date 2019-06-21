import React from 'react';

import myPets from './pets';
import PetPen from '../components/PetPen/PetPen';
import myStaff from './staff';
import StaffRoom from '../components/StaffRoom/StaffRoom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    pets: [],
    staff: [],
  }

  componentDidMount() {
    this.setState({ pets: myPets });
    this.setState({ staff: myStaff });
  }

  render() {
    const { pets } = this.state;
    const { staff } = this.state;
    return (
      <div className="App">
        <div className="row main-con">
          <PetPen pets={pets}/>
          <StaffRoom staff={staff}/>
        </div>
      </div>
    );
  }
}

export default App;
