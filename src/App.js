import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'
import './App.scss';
import Routes from './routers'

function App() {
  return (
    <Router>
      <div className="App">
        { Routes }
      </div>
    </Router>
  );
}

export default App;