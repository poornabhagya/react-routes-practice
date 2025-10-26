import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";
import UserProfile from "./components/profile";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Regular route */}
        <Route path="/" element={<Home />} />
        {/* Dynamic Route */}
        <Route path="/user/:userId" element={<UserProfile />} />

        {/* Parent route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested routes */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
