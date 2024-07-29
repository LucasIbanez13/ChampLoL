import React from 'react';

function CardDetail({ champion, onBack }) {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden w-60 h-96 p-4">
      <button onClick={onBack} className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 rounded z-10">
        Volver
      </button>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={champion.name}
        className="object-cover w-full h-2/3"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{champion.name}</h2>
        <p className="text-sm">{champion.title}</p>
        <div className="bg-gray-900 text-white px-2 py-1 rounded">
          {champion.tags.join(', ')}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
