import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Settings from "./components/settings";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Regular route */}
        <Route path="/" element={<Home />} />

        {/* Parent route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
