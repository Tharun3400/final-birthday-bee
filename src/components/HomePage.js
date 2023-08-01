import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="contains">
      <h1>Welcome to our Birthday Wishing Website!</h1>
      <div className="bunny">
        <nav>
          <ul>
            <li>
              <Link to="/LoginPage">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
