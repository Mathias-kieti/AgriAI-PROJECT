// src/components/dashboard/InfoCards.jsx
import React, { useState } from 'react';

// Utility to get weather icons
const getWeatherIcon = (weather) => {
  switch ((weather || '').toLowerCase()) {
    case 'clear': return '☀️';
    case 'clouds': return '⛅';
    case 'rain':
    case 'drizzle': return '🌧️';
    case 'thunderstorm': return '⛈️';
    case 'snow': return '❄️';
    case 'mist':
    case 'fog': return '🌫️';
    default: return '🌡️';
  }
};

// Gradient background based on weather
const getWeatherGradient = (weather) => {
  switch ((weather || '').toLowerCase()) {
    case 'clear': return 'from-yellow-300 to-orange-400';
    case 'clouds': return 'from-gray-300 to-gray-400';
    case 'rain':
    case 'drizzle': return 'from-blue-300 to-blue-500';
    case 'thunderstorm': return 'from-purple-400 to-purple-600';
    case 'snow': return 'from-white to-blue-100';
    case 'mist':
    case 'fog': return 'from-gray-200 to-gray-300';
    default: return 'from-green-100 to-green-200';
  }
};

// Weather Card
const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const icon = getWeatherIcon(weatherData.weather);
  const bgGradient = getWeatherGradient(weatherData.weather);

  // Fallback 3-day forecast if API doesn't provide it
  const forecast = weatherData.forecast && weatherData.forecast.length > 0
    ? weatherData.forecast.slice(0, 3)
    : [
        { day: 'Day 1', temp: weatherData.temperature, weather: weatherData.weather, description: weatherData.description },
        { day: 'Day 2', temp: weatherData.temperature, weather: weatherData.weather, description: weatherData.description },
        { day: 'Day 3', temp: weatherData.temperature, weather: weatherData.weather, description: weatherData.description },
      ];

  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-3xl p-6 shadow-xl transform transition hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-white text-lg">Weather Snapshot</h3>
        <div className="text-3xl">{icon}</div>
      </div>

      <div className="space-y-2 text-white">
        <div className="flex justify-between">
          <span className="font-semibold">Location</span>
          <span>{weatherData.location}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Temperature</span>
          <span>{Math.round(weatherData.temperature)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Feels Like</span>
          <span>{Math.round(weatherData.feels_like || weatherData.temperature)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Humidity</span>
          <span>{weatherData.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Wind</span>
          <span>{(weatherData.wind_speed || 0 * 3.6).toFixed(1)} km/h</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Weather</span>
          <span>{weatherData.description}</span>
        </div>
      </div>

      {/* 3-Day Forecast */}
      <div className="mt-4">
        <h4 className="text-white font-semibold mb-2">3-Day Forecast</h4>
        <div className="flex justify-between space-x-2">
          {forecast.map((day, idx) => (
            <div key={idx} className="bg-white rounded-xl p-3 text-center flex-1 shadow text-gray-800">
              <div className="text-sm font-semibold">{day.day}</div>
              <div className="text-2xl">{getWeatherIcon(day.weather)}</div>
              <div className="text-sm">{Math.round(day.temp)}°C</div>
              <div className="text-xs text-gray-500">{day.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Market Health Card
const MarketHealthCard = ({ marketHealth }) => {
  if (!marketHealth) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform transition hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
          💹
        </div>
        <h3 className="font-bold text-gray-800">Market Health</h3>
      </div>
      <div className="space-y-3">
        {Object.entries(marketHealth).map(([key, value], i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-gray-600 text-sm">{key}</span>
            <span
              className={`px-4 py-1 rounded-full text-xs font-semibold ${
                value === 'Stable'
                  ? 'bg-green-100 text-green-800'
                  : value === 'Moderate'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Regional Prices Card
const RegionalPricesCard = ({ regionalPrices }) => {
  const [showAll, setShowAll] = useState(false);

  if (!Array.isArray(regionalPrices) || regionalPrices.length === 0) return null;

  const firstFive = regionalPrices.slice(0, 5);
  const remaining = regionalPrices.slice(5);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform transition hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-xl flex items-center justify-center text-2xl">
          🗺️
        </div>
        <h3 className="font-bold text-gray-800">Regional Prices</h3>
      </div>

      {[...firstFive, ...(showAll ? remaining : [])].map((item, i) => (
        <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-xl mb-2 last:mb-0">
          <span className="font-semibold text-gray-700">{item.region}</span>
          <span className="font-bold text-green-700">{`KES ${item.price.toLocaleString()}`}</span>
        </div>
      ))}

      {remaining.length > 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-green-700 font-semibold hover:text-green-900 transition"
        >
          {showAll ? 'Show Less' : `+${remaining.length} More`}
        </button>
      )}
    </div>
  );
};

// Export combined InfoCards
export default function InfoCards({ weatherData, marketHealth, regionalPrices }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <WeatherCard weatherData={weatherData} />
      <MarketHealthCard marketHealth={marketHealth} />
      <RegionalPricesCard regionalPrices={regionalPrices} />
    </div>
  );
}
