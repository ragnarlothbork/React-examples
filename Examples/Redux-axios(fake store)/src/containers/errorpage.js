import React from "react";
import { Link } from "react-router-dom";

function errorpage() {
  return (
    <>
      <h1>404</h1>
      <p>the page you looking for is not found</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </>
  );
}

export default errorpage;
