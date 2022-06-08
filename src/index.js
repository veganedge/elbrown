import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import BirdmafiaIntro from './pages/Birdmafia/BirdmafiaIntro';
import ELBPapercuttingIntro from './pages/ELBPapercutting/ELBPapercuttingIntro';
import ELStarlingIntro from './pages/ELStarling/ELStarlingIntro';
import IntroPage from './pages/Home/IntroPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/elstarling/" element={<ELStarlingIntro />} />
        <Route path="/elbpapercutting/" element={<ELBPapercuttingIntro />} />
        <Route path="/birdmafia/" element={<BirdmafiaIntro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);