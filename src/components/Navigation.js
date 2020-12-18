import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Github Поиск</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">
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

