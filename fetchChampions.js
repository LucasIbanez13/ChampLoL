const axios = require('axios');

const API_URL = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion.json';

const fetchChampions = async () => {
  try {
    const response = await axios.get(API_URL);
    const champions = response.data.data;

    // Ejemplo de campeón
    const aatrox = champions['Aatrox'];
    
    console.log('Nombre:', aatrox.name);
    console.log('Habilidades:', aatrox.spells); // Aquí mostramos las habilidades
  } catch (error) {
    console.error('Error fetching champions:', error);
  }
};

fetchChampions();
