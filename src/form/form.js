import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch {}
  };

  return (
    <div>
      <p>Banana</p>
      <form onClick={handleSubmit}>
        <label>Title:{name}</label>

        <br />

        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Click</button>
      </form>
    </div>
  );
}
