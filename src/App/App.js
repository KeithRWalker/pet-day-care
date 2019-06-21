import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Testing</h2>
      </header>
      <div className="app-body">
        <h2>Hello</h2>
      </div>
    </div>
  );
}

export default App;
