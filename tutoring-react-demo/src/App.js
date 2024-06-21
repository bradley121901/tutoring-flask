import './App.css';
import React from 'react';
import Blackjack from './Blackjack';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tutoring-react" element={<Home />} />
          <Route path="/tutoring-react/blackjack" element={<Blackjack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
