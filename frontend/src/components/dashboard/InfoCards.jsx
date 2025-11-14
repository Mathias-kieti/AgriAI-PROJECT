// src/components/dashboard/InfoCards.jsx
import React from 'react';

const WeatherCard = () => {
  const weatherData = [
    { label: 'Location', value: 'Eldoret' },
    { label: 'Temperature', value: '28°C' },
    { label: 'Rainfall (7-day)', value: '12mm' },
    { label: 'Humidity', value: '65%' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-xl flex items-center justify-center text-2xl">
          ☀️
        </div>
        <h3 className="font-bold text-gray-800">Weather Snapshot</h3>
      </div>
      {weatherData.map((item, i) => (
        <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
          <span className="text-gray-600 text-sm">{item.label}</span>
          <span className="font-semibold text-green-700">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

const MarketHealthCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
          💹
        </div>
        <h3 className="font-bold text-gray-800">Market Health</h3>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-600 text-sm">Market Sentiment</span>
          <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
            Stable
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-600 text-sm">Inflation Risk</span>
          <span className="px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">
            Moderate
          </span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-600 text-sm">Supply Level</span>
          <span className="font-semibold text-green-700">Normal</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="text-gray-600 text-sm">Demand</span>
          <span className="font-semibold text-green-700">High</span>
        </div>
      </div>
    </div>
  );
};

const RegionalPricesCard = () => {
  const regions = [
    { region: 'Nairobi', price: 'KES 3,800' },
    { region: 'Kisumu', price: 'KES 3,200' },
    { region: 'Mombasa', price: 'KES 4,100' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-xl flex items-center justify-center text-2xl">
          🗺️
        </div>
        <h3 className="font-bold text-gray-800">Regional Prices</h3>
      </div>
      {regions.map((item, i) => (
        <div key={i} className="flex justify-between p-4 bg-gray-50 rounded-xl mb-3 last:mb-0">
          <span className="font-semibold text-gray-700">{item.region}</span>
          <span className="font-bold text-green-700">{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default function InfoCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <WeatherCard />
      <MarketHealthCard />
      <RegionalPricesCard />
    </div>
  );
}