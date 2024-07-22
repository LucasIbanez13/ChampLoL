// src/components/body/ChampionsList.jsx
import React from 'react';
import Card from '../body/card/Card.jsx';

const champions = [
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
  // Añade más campeones si es necesario
];

function ChampionsList() {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {champions.map((champion, index) => (
        <Card key={index} champion={champion} />
      ))}
    </div>
  );
}

export default ChampionsList;
