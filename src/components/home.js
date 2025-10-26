import React from "react";
import { Link } from "react-router-dom";
import usersData from "./usersData";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our app!</p>
      <p>Select a user to view their profile:</p>
      <Link to="/dashboard">
        <button style={{ padding: "10px 20px", borderRadius: "8px" }}>
          Go to Dashboard
        </button>
      </Link>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {usersData.map((user) => (
          <li key={user.id} style={{ margin: "1rem 0" }}>
            <Link
              to={`/user/${user.id}`}
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontSize: "18px",
              }}
            >
              👤 {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
