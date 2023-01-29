import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-container">
      <p>There is some kinda error...</p>
      <button className="back-home">
        <Link to="/">back to home</Link>
      </button>
    </div>
  );
};

export default Error;
