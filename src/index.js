// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
// React Router Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Style Imports
import "./index.css";
// Component Imports
import BirdmafiaIntro from "./pages/Birdmafia/BirdmafiaIntro";
import ELBPapercuttingIntro from "./pages/ELBPapercutting/ELBPapercuttingIntro";
import ELStarlingAbout from "./pages/ELStarling/ELStarlingAbout";
import ELStarlingBooks from "./pages/ELStarling/ELStarlingBooks";
import ELStarlingContact from "./pages/ELStarling/ELStarlingContact";
import IntroPage from "./pages/Home/IntroPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/elstarling/" element={<ELStarlingAbout />} />
        <Route path="/elstarling/books/" element={<ELStarlingBooks />} />
        <Route path="/elstarling/contact/" element={<ELStarlingContact />} />
        <Route path="/elbpapercutting/" element={<ELBPapercuttingIntro />} />
        <Route path="/birdmafia/" element={<BirdmafiaIntro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
