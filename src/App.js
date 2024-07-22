// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'; 
import ChampionsList from './components/body/ChampionsList.jsx';

function App() {
  return (
    <div className="App h-screen bg-custom flex flex-col items-center">
      <Header />
      <main className="bg-custom flex-grow w-full p-4">
        <ChampionsList />
      </main>
    </div>
  );
}

export default App;
