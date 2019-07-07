import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNav/MyNav';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    // const { staff } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        {/* <div className="row main-con"> */}
        <MyNavbar authed={authed} />
        {loadComponent()}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
