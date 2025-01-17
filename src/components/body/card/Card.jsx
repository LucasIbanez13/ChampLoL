import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function Card({ champion, toggleFavorite, isFavorite, onShowDetails }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    // Llamar a la función pasada como prop para mostrar los detalles
    onShowDetails();
  };

  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden w-60 h-96">
      <div className="relative h-2/3">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          className="object-cover w-full h-full"
        />
        <p className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded z-10">
          {champion.title}
        </p>
        <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded z-10">
          {champion.tags.join(', ')}
        </div>
        <button 
          className="absolute top-2 left-2 bg-transparent text-red-500 z-20 p-2 cursor-pointer"
          onClick={() => toggleFavorite(champion.id)}
        >
          <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
        </button>
      </div>
      <div className="left-2 text-white z-10">
        <h2 className="text-xl pl-4 pt-3 font-semibold">{champion.name}</h2>
        <button
          className="p-5 mt-6 bg-blue-500 text-white w-full hover:bg-blue-600"
          onClick={handleShowDetails} // Llamar a la función de detalles
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default Card;
