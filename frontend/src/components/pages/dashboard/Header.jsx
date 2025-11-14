// src/components/pages/dashboard/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../../../services/api';

export default function Header({ user, onLogout }) {
  const handleLogout = async () => {
    try {
      await authAPI.logout(); // Django session logout
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      onLogout(); // Reset state in App
    }
  };

  return (
    <header className="bg-gradient-to-r from-green-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <span className="text-5xl">🌾</span>
            <div>
              <h1 className="text-3xl font-bold">AgriAI</h1>
              <p className="text-sm text-green-200">AI-powered insights for sustainable agriculture</p>
            </div>
          </div>
          
          {/* Navigation and User Section */}
          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            <nav className="flex gap-6">
              <Link to="/" className="font-semibold border-b-2 border-yellow-400 pb-1">Dashboard</Link>
              <Link to="/insights" className="font-semibold hover:border-b-2 border-yellow-400 pb-1 transition">Insights</Link>
              <Link to="/about" className="font-semibold hover:border-b-2 border-yellow-400 pb-1 transition">About</Link>
            </nav>

            {/* User Info and Logout */}
            <div className="flex items-center gap-4 border-l border-green-700 pl-6">
              {user && (
                <div className="text-right">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-green-200">{user.email}</p>
                </div>
              )}
              
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
