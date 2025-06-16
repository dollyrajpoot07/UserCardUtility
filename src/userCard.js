import React from "react";
import "./UserCard.css";

export default function UserCard({ name, email, location }) {
  return (
    <div className="user-card">
      <h3 className="user-card-name">{name}</h3>
      <p className="user-card-email">Email: {email}</p>
      <p className="user-card-location">Location: {location}</p>
    </div>
  );
}
