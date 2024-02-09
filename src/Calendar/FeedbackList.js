import React, { useEffect, useState } from "react";

export default function FeedbackList() {
  const [feedbackList, setFeebackList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/feedback").then();
  });

  return <div>FeedbackList</div>;
}
