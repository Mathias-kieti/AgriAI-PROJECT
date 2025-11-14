// src/components/dashboard/ControlPanel.jsx (Updated with Loading State)
import React from 'react';
import Button from '../../common/Button';

export default function ControlPanel({
  selectedCrop,
  selectedRegion,
  selectedDate,
  onCropChange,
  onRegionChange,
  onDateChange,
  onPredict,
  loading = false
}) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 mb-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-bold text-green-800 mb-2 uppercase tracking-wide">
            🌱 Crop Type
          </label>
          <select
            value={selectedCrop}
            onChange={(e) => onCropChange(e.target.value)}
            disabled={loading}
            className="w-full bg-white border-2 border-green-200 rounded-xl px-4 py-3 font-semibold text-green-900 cursor-pointer hover:border-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option>Maize</option>
            <option>Rice</option>
            <option>Wheat</option>
            <option>Barley</option>
            <option>Beans</option>
            <option>Sorghum</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-bold text-green-800 mb-2 uppercase tracking-wide">
            📍 Market / Region
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            disabled={loading}
            className="w-full bg-white border-2 border-green-200 rounded-xl px-4 py-3 font-semibold text-green-900 cursor-pointer hover:border-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option>Eldoret</option>
            <option>Nairobi</option>
            <option>Kisumu</option>
            <option>Mombasa</option>
            <option>Nakuru</option>
            <option>Kitale</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-bold text-green-800 mb-2 uppercase tracking-wide">
            📅 Prediction Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            disabled={loading}
            className="w-full bg-white border-2 border-green-200 rounded-xl px-4 py-3 font-semibold text-green-900 hover:border-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        
        <div>
          <label className="block text-xs mb-2 opacity-0">Button</label>
          <button
            onClick={onPredict}
            disabled={loading}
            className={`w-full py-3 px-6 rounded-xl font-bold transition shadow-lg hover:shadow-xl ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600'
            } text-white`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Predicting...
              </span>
            ) : (
              '🔮 Predict Price'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}