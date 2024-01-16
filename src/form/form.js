import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/submit-form-nat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <p>Banana</p>
      <form onClick={handleSubmit}>
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
        <button type="submit">Click</button>
      </form>
    </div>
  );
}
