import axios from 'axios';

const API_KEY = 'b771c7b53455ad78aaca0c1f123370bf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const weatherAPI = {
  getWeather: async (city) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          units: 'metric',
          appid: API_KEY,
        },
      });

      return {
        location: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        weather: response.data.weather[0].main,
        description: response.data.weather[0].description,
        windSpeed: response.data.wind.speed,
      };
    } catch (error) {
      console.error('Weather API error:', error);
      return null;
    }
  },
};
