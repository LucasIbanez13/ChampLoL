import axios from 'axios';

// Sustituye `YOUR_API_KEY` con tu clave de API de Riot Games
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://na1.api.riotgames.com/lol';

const getChampions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/static-data/v3/champions`, {
      params: {
        api_key: API_KEY,
        locale: 'en_US',
        version: 'v1.2', // Asegúrate de usar la versión correcta
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching champions:', error);
    throw error;
  }
};

export default getChampions;
