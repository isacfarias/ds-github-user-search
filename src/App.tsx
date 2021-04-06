import React from 'react';
import './core/assest/css/custom.css';
import './App.css';
import Navbar from './core/components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
