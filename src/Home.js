import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <h1>Welcome to the Home Page</h1>
      <Link className="Link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="Link" to="/mysteries">
        <h2>Mysteries</h2>
      </Link>
      <Link className="Link" to="/shows">
        <h2>Shows</h2>
      </Link>
    </div>
  );
};
