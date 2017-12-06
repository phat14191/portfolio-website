import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/project">Project</Link>
      <Link to="/skills">Skills</Link>
    </div>
  )
}

export default Navbar;
