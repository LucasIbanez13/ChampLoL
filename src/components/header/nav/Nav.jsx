// src/components/header/nav/Nav.jsx
import React from 'react';

function Nav() {
  return (
    <nav className=" text-white p-4">
      <ul className="flex space-x-6">
        <li><a href="#inicio" className="text-lg font-semibold hover:text-gray-400 transition-colors">Inicio</a></li>
        <li><a href="#campeones" className="text-lg font-semibold hover:text-gray-400 transition-colors">Campeones</a></li>
        <li><a href="#favoritos" className="text-lg font-semibold hover:text-gray-400 transition-colors">Favoritos</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
