// src/components/header/Header.jsx
import React from 'react';
import Nav from './nav/Nav'; // Asegúrate de que la ruta sea correcta

function Header({ setSelectedRole, setShowFavorites }) {
  return (
    <div className="relative flex flex-col items-center pt-12 h-screen">
      <div className="relative flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-purple-600 relative z-10 mb-4">
          ChampLoL
        </h1>
        <h1 className="text-6xl font-extrabold text-blue-500 absolute top-0 left-1 z-0">
          ChampLoL
        </h1>
      </div>
      <Nav 
        setSelectedRole={setSelectedRole} 
        setShowFavorites={setShowFavorites}
      /> {/* Usa el componente Nav */}
    </div>
  );
}

export default Header;
