import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="content">
        <nav className="bars">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/pending"}>Pending Items</Link>
            </li>
            <li>
              <Link to={"/completed"}>Completed Items</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="brand">To-Do-List React JS</div>
    </div>
  );
}
