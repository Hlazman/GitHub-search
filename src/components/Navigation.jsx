import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">GitHub search</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          HOME
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          INFO
        </NavLink>
      </li>
    </ul>
  </nav>
);

