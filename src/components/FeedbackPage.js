import React, { useState } from "react";
import "../App.css";
import "./FeedbackPage.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission, e.g., send feedback to the server
  };

  return (
    <div className="buddy">
      <h1>Feedback Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
