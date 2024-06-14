import './App.css';
import React from 'react';
import Blackjack from './Blackjack';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blackjack" element={<Blackjack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
