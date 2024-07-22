// src/components/body/ChampionsList.jsx
import React, { useState } from 'react';
import Card from '../body/card/Card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const categories = ['All', 'Mage', 'Warrior', 'Assassin']; // Añade más categorías según sea necesario

const champions = [
  {
    name: 'Azir',
    role: 'Warrior',
    title: 'Rey de Shurima',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
  },
  {
    name: 'Azir',
    role: 'Assassin',
    title: 'Rey de Shurima',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
  },
  {
    name: 'Azir',
    role: 'Mage',
    title: 'Rey de Shurima',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
  },
  {
    name: 'Azir',
    role: 'Mage',
    title: 'Rey de Shurima',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
  },
  {
    name: 'Assassin',
    role: 'Mage',
    title: 'Rey de Shurima',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
  },
  {
    name: 'Azir',
    role: 'Mage',
    title: 'Rey de Shurima',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
  },
  // Añade más campeones aquí
];

function ChampionsList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false); // Cierra el menú al seleccionar una categoría
  };

  const filteredChampions = selectedCategory === 'All'
    ? champions
    : champions.filter(champion => champion.role === selectedCategory);

  return (
    <div className="relative flex flex-col items-center p-4">
      <div className="relative mb-8 w-full max-w-screen-lg">
        <div className="absolute top-2 right-0 z-50"> 
          <div className="relative inline-block text-left">
            <button
              className="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none px-4 py-2 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">Filter by: {selectedCategory}</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white bg-opacity-60 text-gray-800 rounded shadow-lg z-50"> {/* Ajustar bg-opacity-60 para mayor transparencia */}
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {filteredChampions.map((champion, index) => (
          <Card key={index} champion={champion} />
        ))}
      </div>
    </div>
  );
}

export default ChampionsList;
