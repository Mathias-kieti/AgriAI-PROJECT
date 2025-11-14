// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import Button from '../common/Button';

export default function LoginForm({ isLogin, onSubmit, onToggleMode, loading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-green-900 mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-600">
          {isLogin ? 'Sign in to access your dashboard' : 'Join AgriAI to get started'}
        </p>
      </div>

      <div className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm font-semibold text-green-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition"
              placeholder="John Doe"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-green-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-900 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition"
            placeholder="••••••••"
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm font-semibold text-green-900 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none transition"
              placeholder="••••••••"
            />
          </div>
        )}

        <Button onClick={handleSubmit} className="w-full" disabled={loading}>
          {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
        </Button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onToggleMode}
          className="text-green-700 hover:text-green-900 font-semibold"
        >
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
}
