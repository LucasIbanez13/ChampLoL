import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CardDetail({ championId, onBack }) {
  const [champion, setChampion] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const fetchChampionDetails = async () => {
      try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/${championId}.json`);
        const championData = response.data.data[championId];
        setChampion(championData);
      } catch (error) {
        console.error('Error fetching champion details:', error);
      }
    };

    fetchChampionDetails();
  }, [championId]);

  const handleSkillClick = (skill) => {
    setActiveSkill((prevSkill) => (prevSkill === skill ? null : skill));
  };

  if (!champion) return null;

  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden w-4/5 max-w-4xl h-auto p-4 mx-auto">
      <button onClick={onBack} className="absolute top-4 left-4 text-white bg-gray-800 px-3 py-1 rounded">Volver</button>
      <div className="relative w-full mb-4">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          className="object-cover w-full h-auto"
        />
        <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded z-20">
          {champion.tags && champion.tags.join(', ')}
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 z-30">
          {champion.spells && champion.spells.length > 0 ? (
            champion.spells.map((spell) => (
              <div
                key={spell.id}
                className={`relative cursor-pointer ${activeSkill === spell ? 'border-4 border-gold-500' : ''}`}
                onClick={() => handleSkillClick(spell)}
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/${spell.id}.png`}
                  alt={spell.name}
                  className="w-16 h-16"
                />
                {activeSkill === spell && (
                  <div className="absolute bg-yellow-900 text-white p-2 rounded mb-2 w-80 bottom-full left-0 z-40">
                    <h3 className="text-lg font-semibold">{spell.name}</h3>
                    <p className="text-sm mt-1">{spell.description}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-white">No se encontraron habilidades para este campeón.</p>
          )}
        </div>
      </div>
      <div className="text-center pt-4">
        <h2 className="text-3xl font-semibold mb-2">{champion.name}</h2>
        <p className="text-xl mb-4">{champion.title}</p>
        <p className="text-base leading-relaxed">
          {champion.blurb || 'Descripción no disponible.'}
        </p>
      </div>
    </div>
  );
}

export default CardDetail;
