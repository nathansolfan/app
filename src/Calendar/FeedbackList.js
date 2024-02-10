import React, { useEffect, useState } from "react";

export default function FeedbackList() {
  const [feedbackList, setFeebackList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeebackList(data))
      .catch((error) => console.error("Error fetching DA feedback", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/feedback/${id}`, { method: "DELETE" })
      .then(() => {
        const updatedFeedbackList = feedbackList.filter(
          (item) => item.id.toString() !== id
        );
        setFeebackList(updatedFeedbackList);
      })
      .catch((error) => console.error("Error deleting feedback:", error));
  };

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbackList.map((feedback) => (
          <li key={feedback.id}>
            {feedback.date} - {feedback.rating} - {feedback.comment}
            <button onClick={() => handleDelete(feedback.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
