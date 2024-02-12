import React, { useState } from "react";

export default function ChatGPT() {
  const [userQuery, setUserQuery] = useState("");
  const [resposes, setResponses] = useState([]);

  return (
    <div>
      <h3>Chat with GPT-3</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userQuery}
          onChange={handeQueryChange}
          placeholder="Ask me something bruh"
        />
        <button type="submit">Send</button>
      </form>
      <div>{setResponses.map(response)}</div>
    </div>
  );
}
