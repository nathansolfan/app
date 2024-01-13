import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div>
      <p>Banana</p>
      <form action="">
        <label>Title: {name}</label>

        <br />

        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Click</button>
      </form>
    </div>
  );
}
