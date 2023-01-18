import React from 'react';
import logo from './logo.svg';
import './App.css';
import Road from './components/road';
import MyGarage from './components/api';

function App() {
  return (
    <div className="App">
      <Road />
      {MyGarage()}
    </div>
  );
}

export default App;
