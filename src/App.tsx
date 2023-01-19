

import { Routes, Route } from 'react-router-dom';
import './App.css';

import MyGarage from './components/api';
import Header from './components/header';
import Winners from './components/winners';

function App() {
  return (
    <div >
<Header />
      <Routes>
        <Route path="/" element={<MyGarage />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </div>

  );
}

export default App;
