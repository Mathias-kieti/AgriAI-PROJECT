// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AuthPage from './components/auth/AuthPage';
import Dashboard from './components/pages/dashboard/Dashboard';
import About from './components/pages/About';
import Insights from './components/pages/Insights';

import { authAPI } from './services/api';

// ✅ Import WeatherProvider
import { WeatherProvider } from './context/WeatherContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userData = await authAPI.getCurrentUser();
      setCurrentUser(userData);
      setIsAuthenticated(true);
    } catch {
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
    } catch {}
    finally {
      localStorage.removeItem('authToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <WeatherProvider>
      <Router>
        <Routes>
          {!isAuthenticated ? (
            <Route path="*" element={<AuthPage onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Dashboard user={currentUser} onLogout={handleLogout} />} />
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
