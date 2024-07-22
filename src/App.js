// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ChampionsList from './components/body/ChampionsList';

function App() {
  const [selectedRole, setSelectedRole] = useState('Todos');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Manejar el toggle de favoritos
  const toggleFavorite = (championId) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(championId)
        ? prevFavorites.filter(id => id !== championId)
        : [...prevFavorites, championId]
    );
  };

  return (
    <div className="App h-screen bg-custom flex flex-col items-center">
      <Header 
        setSelectedRole={setSelectedRole} 
        setShowFavorites={setShowFavorites} 
      />
      <main className="bg-custom flex-grow w-full p-4">
        <ChampionsList 
          selectedRole={selectedRole} 
          showFavorites={showFavorites} 
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setSelectedRole={setSelectedRole}  // Pasar setSelectedRole
        />
      </main>
    </div>
  );
}

export default App;
