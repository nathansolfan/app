import React, { useState } from "react";

export default function FeedbackForm() {
  const submitFeedback = (rating, comment) => {
    const feebackData = { rating, comment };
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feebackData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div>
      <h3>Submit Feedback</h3>
      <div>
        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="0">Choose a rating</option>
          <option value="1">Poor</option>
          <option value="2">Fair</option>
          <option value="3">Good</option>
          <option value="4">Very Good</option>
          <option value="0">Excellent</option>
        </select>
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}
