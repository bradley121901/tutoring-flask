import './App.css';
import React from 'react';
import Blackjack from './Blackjack';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
function App() {
  return Home();
}

export default App;
