import React, { useState } from "react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div>
      <h3>Submit Feedback</h3>
      <div>
        <label>Rating</label>
        <select value={rating}>
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
      <button onSubmit={submitFeedback}>Submit Feedback</button>
    </div>
  );
}
