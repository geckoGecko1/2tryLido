import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Rewards from './components/Rewards';

function App() {
  return (
    <div>
      <div id="__next" data-reactroot>
        <div className="Toastify"></div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
