

import { Routes, Route } from 'react-router-dom';
import './App.css';

import MyGarage from './components/api';
import Header from './components/header';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<MyGarage />} />
        <Route path="/winners" element={<Header />} />
      </Routes>
    </div>

  );
}

export default App;
