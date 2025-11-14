// src/components/pages/Insights.jsx
import React, { useState, useEffect } from 'react';
import { predictionAPI } from '../../services/api';


export default function Insights() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      // This would fetch real insights from your API
      // const data = await predictionAPI.getInsights();
      
      // Mock data for now
      setInsights([
        {
          id: 1,
          title: 'Maize Prices Expected to Rise',
          category: 'Price Forecast',
          date: '2025-11-12',
          summary: 'Maize prices are projected to increase by 15% in the next quarter due to reduced rainfall.',
          impact: 'High',
          icon: '📈'
        },
        {
          id: 2,
          title: 'Best Time to Sell Wheat',
          category: 'Market Timing',
          date: '2025-11-10',
          summary: 'Historical data shows December is the optimal month for wheat sales in Eldoret region.',
          impact: 'Medium',
          icon: '🌾'
        },
        {
          id: 3,
          title: 'Weather Pattern Analysis',
          category: 'Weather',
          date: '2025-11-08',
          summary: 'El Niño patterns suggest increased rainfall in January, potentially affecting planting schedules.',
          impact: 'High',
          icon: '🌧️'
        },
        {
          id: 4,
          title: 'Regional Price Disparities',
          category: 'Regional Analysis',
          date: '2025-11-05',
          summary: 'Significant price differences detected between Nairobi and Mombasa markets for rice.',
          impact: 'Medium',
          icon: '🗺️'
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching insights:', error);
      setLoading(false);
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Price Forecast':
        return 'bg-blue-100 text-blue-800';
      case 'Market Timing':
        return 'bg-purple-100 text-purple-800';
      case 'Weather':
        return 'bg-cyan-100 text-cyan-800';
      case 'Regional Analysis':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-2xl font-bold text-green-900">Loading Insights...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-2">Market Insights</h1>
          <p className="text-green-700 text-lg">
            AI-powered analysis and recommendations for your agricultural business
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Insights</p>
                <p className="text-3xl font-bold text-green-900">24</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">High Impact</p>
                <p className="text-3xl font-bold text-red-600">8</p>
              </div>
              <div className="text-4xl">⚠️</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">This Week</p>
                <p className="text-3xl font-bold text-blue-600">12</p>
              </div>
              <div className="text-4xl">📅</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Accuracy</p>
                <p className="text-3xl font-bold text-green-600">94%</p>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              All Insights
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
              Price Forecast
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
              Weather
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
              Market Timing
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
              Regional
            </button>
          </div>
        </div>

        {/* Insights List */}
        <div className="space-y-6">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{insight.icon}</div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(insight.category)}`}>
                      {insight.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImpactColor(insight.impact)}`}>
                      {insight.impact} Impact
                    </span>
                    <span className="text-gray-500 text-sm">{insight.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {insight.summary}
                  </p>

                  <button className="text-green-700 font-semibold hover:text-green-900 transition">
                    Read Full Analysis →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
            Load More Insights
          </button>
        </div>
      </div>
    </div>
  );
}