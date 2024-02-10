import React, { useEffect, useState } from "react";

export default function FeedbackList() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackList(data))
      .catch((error) => console.error("Error fetching DA feedback", error));
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/feedback/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch((error) => console.error("Error deleting", error));
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
