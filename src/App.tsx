import React from 'react';
import logo from './logo.svg';
import './App.css';
import Road from './components/road';
import MyComponent from './components/api';

function App() {
  return (
    <div className="App">
      <Road />
      {MyComponent()}
    </div>
  );
}

export default App;
