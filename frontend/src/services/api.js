import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// CSRF interceptor
api.interceptors.request.use((config) => {
  const csrfToken = Cookies.get('csrftoken');
  if (csrfToken && ['post', 'put', 'patch', 'delete'].includes(config.method)) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized or session expired. User may need to log in.');
    }
    return Promise.reject(error);
  }
);

// ---------------- Authentication ----------------
export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login/', credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  signup: async (userData) => {
    try {
      const response = await api.post('/auth/signup/', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  logout: async () => {
    try {
      await api.post('/auth/logout/');
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/user/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// ---------------- Predictions ----------------
export const predictionAPI = {
  getPrediction: async (data) => {
    try {
      const response = await api.post('/predictions/', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getHistory: async () => {
    try {
      const response = await api.get('/predictions/history/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getFactors: async (crop) => {
    try {
      const response = await api.get(`/predictions/factors/${crop}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

// ---------------- Market ----------------
export const marketAPI = {
  getWeather: async (location) => {
    try {
      const response = await api.get(`/market/weather/${location}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getMarketHealth: async () => {
    try {
      const response = await api.get('/market/health/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getRegionalPrices: async (crop) => {
    try {
      const response = await api.get(`/market/regional-prices/${crop}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getCrops: async () => {
    try {
      const response = await api.get('/market/crops/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getRegions: async () => {
    try {
      const response = await api.get('/market/regions/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default api;
