import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";
import UserProfile from "./components/profile";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* 👤 Dynamic User Profile Route (Public for now) */}
        <Route path="/user/:userId" element={<UserProfile />} />

        {/* 🔒 Protected Dashboard + Nested Routes */}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Nested routes inside Dashboard */}
          <Route path="settings" element={<Settings />} />
          {/* Add more nested routes like: */}
          {/* <Route path="tasks" element={<TaskManager />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
