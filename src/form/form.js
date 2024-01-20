import React from "react";
import { useState } from "react";

export default function Form({ onSubmit, buttonLabel }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>Banana</p>
      <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Password </label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
}
