import React, { useState, useEffect } from 'react';
import AuthPage from './components/auth/AuthPage';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { authAPI } from './services/api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get CSRF cookie first
    axios.get('http://127.0.0.1:8000/api/get-csrf/', { withCredentials: true })
      .then(() => checkAuthStatus())
      .catch(() => setLoading(false));
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userData = await authAPI.getCurrentUser();
      setCurrentUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.warn('User not authenticated:', error);
      setCurrentUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setCurrentUser(null);
      setIsAuthenticated(false);
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌾</div>
          <h1 className="text-3xl font-bold text-green-900 mb-2">AgriAI</h1>
          <p className="text-green-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {!isAuthenticated ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
