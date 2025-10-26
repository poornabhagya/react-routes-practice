import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import usersData from "./usersData";

export default function UserProfile() {
  const { userId } = useParams(); // Get userId from URL
  const navigate = useNavigate(); // For programmatic navigation

  // Find user by ID
  const user = usersData.find((u) => u.id === parseInt(userId));

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>❌ User not found!</h2>
        <button onClick={() => navigate("/")} style={buttonStyle}>
          ⬅️ Back Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>👤 {user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <button onClick={() => navigate("/")} style={buttonStyle}>
        ⬅️ Back to Home
      </button>
    </div>
  );
}

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "8px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
};
