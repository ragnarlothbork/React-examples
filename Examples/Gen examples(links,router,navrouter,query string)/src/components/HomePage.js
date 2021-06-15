import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>WELCOME TO THE COURSES</h1>
      <p>Go to the courses page to learn about the available courses</p>
      <Link to="/courses" className="btn btn-primary">COURSES</Link>
    </div>
  );
}

export default HomePage;
