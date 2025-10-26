import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our app!</p>
      <Link to="/dashboard">
        <button style={{ padding: "10px 20px", borderRadius: "8px" }}>
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
