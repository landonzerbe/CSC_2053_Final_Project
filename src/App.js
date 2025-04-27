'use client'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutTracker from "./WorkoutTracker";  
import AuthPage from "./authpage";  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/workout-tracker" element={<WorkoutTracker />} />
      </Routes>
    </Router>
  );
}

export default App;