import userEvent from "@testing-library/user-event";
import React from "react";

export default function UserDetail({ user }) {
  return (
    <div>
      <h2>User Details:</h2>
      <p>Name: {user.name}</p>
    </div>
  );
}
