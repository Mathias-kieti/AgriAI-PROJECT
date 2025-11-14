// src/components/pages/About.jsx
import React from 'react';

export default function About() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms analyze historical data, weather patterns, and market trends to provide accurate price forecasts.'
    },
    {
      icon: '🌤️',
      title: 'Weather Integration',
      description: 'Real-time weather data integration helps understand the impact of climate conditions on crop prices and yields.'
    },
    {
      icon: '📊',
      title: 'Market Analytics',
      description: 'Comprehensive market analysis with regional price comparisons, supply-demand dynamics, and trend identification.'
    },
    {
      icon: '🎯',
      title: 'High Accuracy',
      description: 'Our models achieve 87%+ accuracy in price predictions, validated against historical market data.'
    },
    {
      icon: '🗺️',
      title: 'Regional Coverage',
      description: 'Coverage across major agricultural markets in Kenya including Nairobi, Eldoret, Kisumu, and Mombasa.'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'Intuitive interface designed for farmers and traders with minimal technical knowledge required.'
    }
  ];

  const team = [
    {
      name: 'Data Science Team',
      role: 'ML Model Development',
      icon: '🔬'
    },
    {
      name: 'Agricultural Experts',
      role: 'Domain Knowledge',
      icon: '🌾'
    },
    {
      name: 'Software Engineers',
      role: 'Platform Development',
      icon: '💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-7xl mb-6">🌾</div>
          <h1 className="text-5xl font-bold mb-4">About AgriAI</h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Empowering farmers and traders with AI-driven insights for sustainable agriculture and better market decisions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            To democratize access to agricultural market intelligence by leveraging artificial intelligence 
            and data science. We believe every farmer and trader deserves access to accurate, timely information 
            to make informed decisions about their crops and maximize their returns while promoting sustainable 
            agricultural practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="font-bold text-green-900 mb-2">1. Data Collection</h3>
              <p className="text-gray-600 text-sm">
                We gather historical price data, weather information, and market trends
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="font-bold text-green-900 mb-2">2. AI Analysis</h3>
              <p className="text-gray-600 text-sm">
                Machine learning models process and analyze patterns in the data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-green-900 mb-2">3. Predictions</h3>
              <p className="text-gray-600 text-sm">
                Generate accurate price forecasts with confidence scores
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="font-bold text-green-900 mb-2">4. Insights</h3>
              <p className="text-gray-600 text-sm">
                Deliver actionable insights through our user-friendly platform
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-green-100">Active Users</div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">87%</div>
            <div className="text-blue-100">Prediction Accuracy</div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-orange-100">Crop Types</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-purple-100">Market Regions</div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">{member.icon}</span>
                </div>
                <h3 className="font-bold text-green-900 text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔧</span> Backend Technologies
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Python & Django
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Machine Learning (scikit-learn, TensorFlow)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> PostgreSQL Database
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> RESTful APIs
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💻</span> Frontend Technologies
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Real-time Data Visualization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and traders making smarter decisions with AgriAI
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition shadow-lg text-lg">
            Start Using AgriAI Today
          </button>
        </div>
      </div>
    </div>
  );
}