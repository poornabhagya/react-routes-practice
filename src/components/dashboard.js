import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#f4f4f4",
          padding: "1rem",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          
          <li>
            <Link to="settings">⚙️ Settings</Link>
          </li>
        </ul>
        <hr />
        <Link to="/">⬅️ Back to Home</Link>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet /> {/* 👈 Renders nested route components here */}
      </main>
    </div>
  );
}
