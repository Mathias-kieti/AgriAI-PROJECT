// src/components/dashboard/Dashboard.jsx (Final Version)
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ControlPanel from './ControlPanel';
import PriceCard from './PriceCard';
import FactorsCard from './FactorsCard';
import InfoCards from './InfoCards';
import { predictionAPI, marketAPI } from '../../services/api';

export default function Dashboard({ user, onLogout }) {
  const [selectedCrop, setSelectedCrop] = useState('Maize');
  const [selectedRegion, setSelectedRegion] = useState('Eldoret');
  const [selectedDate, setSelectedDate] = useState('November 19, 2025');
  
  // State for prediction results
  const [predictionData, setPredictionData] = useState(null);
  const [factors, setFactors] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [marketHealth, setMarketHealth] = useState(null);
  const [regionalPrices, setRegionalPrices] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch initial data
  useEffect(() => {
    fetchMarketData();
  }, [selectedRegion, selectedCrop]);

  const fetchMarketData = async () => {
    try {
      // Fetch weather data
      const weather = await marketAPI.getWeather(selectedRegion);
      setWeatherData(weather);

      // Fetch market health
      const health = await marketAPI.getMarketHealth();
      setMarketHealth(health);

      // Fetch regional prices
      const prices = await marketAPI.getRegionalPrices(selectedCrop);
      setRegionalPrices(prices);

      // Fetch influencing factors
      const cropFactors = await predictionAPI.getFactors(selectedCrop);
      setFactors(cropFactors.factors);
    } catch (err) {
      console.error('Error fetching market data:', err);
      // Don't show error for background data fetching
    }
  };

  const handlePredict = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await predictionAPI.getPrediction({
        crop: selectedCrop,
        region: selectedRegion,
        date: selectedDate,
      });

      setPredictionData(response);
      console.log('Prediction received:', response);
    } catch (err) {
      console.error('Prediction error:', err);
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Header user={user} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Message */}
        {user && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-green-900">
              Welcome back, {user.name?.split(' ')[0] || 'User'}! 👋
            </h2>
            <p className="text-green-700">Here are your crop price predictions and market insights</p>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Control Panel */}
        <ControlPanel
          selectedCrop={selectedCrop}
          selectedRegion={selectedRegion}
          selectedDate={selectedDate}
          onCropChange={setSelectedCrop}
          onRegionChange={setSelectedRegion}
          onDateChange={setSelectedDate}
          onPredict={handlePredict}
          loading={loading}
        />

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <PriceCard 
            price={predictionData ? `KES ${predictionData.price.toLocaleString()}` : 'KES 1,480'}
            unit={predictionData?.unit || 'per 93kg bag'}
            confidence={predictionData?.confidence || 87}
            change={predictionData?.change || '+12%'}
            changeText={predictionData?.change_text || 'from last month'}
            chartData={predictionData?.chart_data}
          />
          <FactorsCard factors={factors} />
        </div>

        {/* Info Cards */}
        <InfoCards 
          weatherData={weatherData}
          marketHealth={marketHealth}
          regionalPrices={regionalPrices}
        />

        {/* Alert Box */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-xl p-6 flex gap-4 shadow-lg">
          <div className="text-3xl">⚠️</div>
          <div>
            <h4 className="font-bold text-orange-700 mb-2">Price Forecast Alert</h4>
            <p className="text-orange-900 leading-relaxed">
              Prices are expected to increase by 8-12% next month due to reduced rainfall and 
              increased demand during harvest season. Consider timing your sales accordingly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}