import axios from 'axios';

// Sustituye `YOUR_API_KEY` con tu clave de API de Riot Games
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://na1.api.riotgames.com/lol/static-data/v3'; // Asegúrate de que esta sea la URL correcta para la versión que estás usando

const getChampions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/champions`, {
      params: {
        api_key: API_KEY,
        locale: 'es_ES', // Cambiar a español
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching champions:', error);
    throw error;
  }
};

export default getChampions;
