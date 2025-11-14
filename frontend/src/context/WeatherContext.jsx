// src/context/WeatherContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { weatherAPI } from '../services/weatherApi';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState('Eldoret');
  const [weatherData, setWeatherData] = useState({
    location: 'Eldoret',
    temperature: 25,
    humidity: 60,
    description: 'Clear',
    weather: 'Clear'
  });
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState('');

  const fetchWeather = async (region) => {
    if (!region) return;
    setLoadingWeather(true);
    setWeatherError('');
    try {
      const weather = await weatherAPI.getWeather(region);
      if (weather) {
        setWeatherData(weather);
      } else {
        setWeatherData({
          location: region,
          temperature: 25,
          humidity: 60,
          description: 'Clear',
          weather: 'Clear'
        });
      }
    } catch (err) {
      console.error('Weather fetch error:', err);
      setWeatherError('Failed to fetch weather data');
      setWeatherData({
        location: region,
        temperature: 25,
        humidity: 60,
        description: 'Clear',
        weather: 'Clear'
      });
    } finally {
      setLoadingWeather(false);
    }
  };

  // Fetch weather whenever selectedRegion changes
  useEffect(() => {
    fetchWeather(selectedRegion);
  }, [selectedRegion]);

  return (
    <WeatherContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        weatherData,
        setWeatherData,
        loadingWeather,
        weatherError
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
