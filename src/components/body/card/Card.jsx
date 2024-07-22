// src/components/body/card/Card.jsx
import React from 'react';

function Card({ champion }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 h-96 flex flex-col">
      {/* Imagen del campeón */}
      <div className="relative">
        <img src={champion.image} alt={champion.name} className="w-full h-48 object-cover" />
        {/* Sobrenombre del campeón */}
        <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 text-xs rounded">
          {champion.title}
        </div>
        {/* Rol del campeón */}
        <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 text-xs rounded">
          {champion.role}
        </div>
      </div>
      {/* Contenido de la tarjeta */}
      <div className="flex flex-col p-4 flex-grow">
        <h2 className="text-xl font-extrabold mb-2">{champion.name}</h2>
        {/* Botón Ver Más */}
        <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
          Ver Más
        </button>
      </div>
    </div>
  );
}

export default Card;
