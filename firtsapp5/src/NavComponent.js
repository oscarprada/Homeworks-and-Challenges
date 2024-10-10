// src/NavComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css'; // Asegúrate de tener un archivo CSS para estilos

function NavComponent() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default NavComponent;
