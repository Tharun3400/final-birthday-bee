import React, { useState } from "react";
import "../App.css";
import "./NotificationPage.css";

const NotificationPage = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [date, setDate] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission, e.g., send data to the server
    // You can also use the state variables to display a summary of the submitted data
  };

  return (
    <div className="contain1">
      <h1>Notification Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        
        <label>
          Relationship:
          <input
            type="text"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
          />
        </label>
        
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        
        <label>
          Notification:
          <textarea
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
          />
        </label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NotificationPage;