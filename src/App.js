import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx'; 
import ChampionsList from './components/body/ChampionsList.jsx';

function App() {
  const [selectedRole, setSelectedRole] = useState('All');

  return (
    <div className="App h-screen bg-custom flex flex-col items-center">
      <Header setSelectedRole={setSelectedRole} />
      <main className="bg-custom flex-grow w-full p-4">
        <ChampionsList selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
      </main>
    </div>
  );
}

export default App;
