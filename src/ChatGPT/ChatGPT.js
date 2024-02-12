import React, { useState } from "react";

export default function ChatGPT() {
  const [userQuery, setUserQuery] = useState("");
  const [responses, setResponses] = useState([]);

  const handleQueryChange = (event) => {
    setUserQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userQuery.trim()) return;

    const newResponse = `Response to :${userQuery}`;
    setResponses([...responses, newResponse]);
    setUserQuery("");
  };

  return (
    <div>
      <h3>Chat with GPT-3</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userQuery}
          onChange={handleQueryChange}
          placeholder="Ask me something bruh"
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {responses.map((response, index) => (
          <p key={index}>{response}</p>
        ))}
      </div>
    </div>
  );
}
