import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Committee from "./pages/Committee.js";
import Program_Schedule from "./pages/Program_Schedule.js";
import Keynote_Speakers from "./pages/Keynote_Speakers.js";
import Tutorial_Speakers from "./pages/Tutorial_Speakers.js";
import Track_Chairs from "./pages/Track_Chairs.js";
import Special_Session from "./pages/Special_Session.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/program_schedule" element={<Program_Schedule />} />
        <Route path="/keynote_speakers" element={<Keynote_Speakers />} />
        <Route path="/tutorial_speakers" element={<Tutorial_Speakers />} />
        <Route path="/track_chairs" element={<Track_Chairs />} />
        <Route path="/special_session" element={<Special_Session />} />
      </Routes>
    </Router>
  );
};

export default App;
