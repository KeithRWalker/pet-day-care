import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';

import myPets from './pets';
import PetPen from '../components/PetPen/PetPen';
import myStaff from './staff';
import MyNavbar from '../components/MyNav/MyNav';
// import StaffRoom from '../components/StaffRoom/StaffRoom';

import Auth from '../components/Auth/Auth';
// import Home from '../components/Home/Home';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    pets: [],
    staff: [],
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
    this.setState({ pets: myPets });
    this.setState({ staff: myStaff });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const { pets } = this.state;
    // const { staff } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <PetPen pets={pets}/>;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        {/* <div className="row main-con"> */}
        <MyNavbar authed={authed} />
        {loadComponent()}
        {/* <StaffRoom staff={staff}/> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
