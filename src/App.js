import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
