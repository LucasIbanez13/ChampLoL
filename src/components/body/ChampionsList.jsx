import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card/Card';
import CardDetail from './cardDetail/CardDetail';

const API_URL = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion.json';

function ChampionsList({ selectedRole, showFavorites, setSelectedRole }) {
  const [champions, setChampions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedChampion, setSelectedChampion] = useState(null);

  const fetchChampions = async () => {
    try {
      const response = await axios.get(API_URL);
      const championsData = response.data.data;
      const championsArray = Object.values(championsData);
      setChampions(championsArray);

      const allRoles = championsArray.flatMap(champion => champion.tags);
      const uniqueRoles = [...new Set(allRoles)];
      setRoles(['Todos', ...uniqueRoles]);
    } catch (error) {
      console.error('Error fetching champions:', error);
    }
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (championId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(championId)
        ? prevFavorites.filter(id => id !== championId)
        : [...prevFavorites, championId];
      return newFavorites;
    });
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setMenuOpen(false);
  };

  const handleShowDetails = (championId) => {
    setSelectedChampion(championId);
  };

  const handleBack = () => {
    setSelectedChampion(null);
  };

  const filteredChampions = showFavorites
    ? champions.filter(champion => favorites.includes(champion.id))
    : selectedRole === 'Todos'
      ? champions
      : champions.filter(champion => champion.tags.includes(selectedRole));

  if (showFavorites && filteredChampions.length === 0) {
    return (
      <div className="flex flex-col items-center p-4">
        <p className="text-white">Agrega campeones a favoritos.</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center p-4">
      {!showFavorites && (
        <div className="absolute top-2 right-2 z-20">
          <div className="relative inline-block text-left">
            <button
              className="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none px-4 py-2 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">Filtro: {selectedRole}</span>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg opacity-75">
                <ul>
                  {roles.map((role) => (
                    <li
                      key={role}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleRoleChange(role)}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedChampion ? (
        <CardDetail championId={selectedChampion} onBack={handleBack} />
      ) : (
        <div className="flex flex-wrap gap-4 justify-center mt-16">
          {filteredChampions.map((champion) => (
            <Card 
              key={champion.id} 
              champion={champion}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(champion.id)}
              onShowDetails={() => handleShowDetails(champion.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ChampionsList;
