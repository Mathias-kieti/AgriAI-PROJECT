// src/components/auth/AuthPage.jsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { authAPI } from '../../services/api';

export default function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setError('');
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await authAPI.login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        response = await authAPI.signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      // Django session sets cookie, response.user contains current user
      if (response.token) {
        localStorage.setItem('authToken', response.token);
      }
      onLogin(response.user);
    } catch (err) {
      console.error('Authentication error:', err);
      setError(err.error || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-6xl">🌾</span>
            <div>
              <h1 className="text-5xl font-bold text-green-900">AgriAI</h1>
              <p className="text-green-700 mt-2">AI-powered insights for sustainable agriculture</p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-bold text-green-900">Market Predictions</h3>
                <p className="text-green-700">Get accurate crop price forecasts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🌤️</span>
              <div>
                <h3 className="font-bold text-green-900">Weather Integration</h3>
                <p className="text-green-700">Real-time weather impact analysis</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h3 className="font-bold text-green-900">Regional Insights</h3>
                <p className="text-green-700">Compare prices across markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div>
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          <LoginForm
            isLogin={isLogin}
            onSubmit={handleSubmit}
            onToggleMode={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
