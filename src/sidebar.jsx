import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/new">New Request</Link>
        </li>
        {/* Add additional sidebar links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
