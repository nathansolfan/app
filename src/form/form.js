import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <p>Banana</p>
      <form action="http://localhost:3001/submit-form-nat" method="POST">
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
