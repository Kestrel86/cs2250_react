import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
        <li>
          <Link to="/tictactoe">Tictactoe</Link>
        </li>
      </ul>
    </nav>
  );
}
