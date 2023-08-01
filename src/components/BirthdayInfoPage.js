import React, { useState } from "react";
import "./BirthdayInfoPage.css";

const BirthdayInfoPage = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission, e.g., send data to the server
    // You can also use the state variables to display a summary of the submitted data
  };

  return (
    <div className="container">
      <h1>Birthday Information Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact Details:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message to Wish:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birthday:
          <input
            type="date"
            value={birthdayDate}
            onChange={(e) => setBirthdayDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BirthdayInfoPage;
