// src/components/dashboard/FactorsCard.jsx
import React from 'react';

export default function FactorsCard({ factors }) {
  const defaultFactors = [
    { name: 'Rainfall', value: 45 },
    { name: 'Past Price', value: 30 },
    { name: 'Supply', value: 15 },
    { name: 'Seasonality', value: 10 }
  ];

  const displayFactors = factors || defaultFactors;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
        📊 Top Influencing Factors
      </h3>
      
      {displayFactors.map((factor, i) => (
        <div key={i} className="mb-5 last:mb-0">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-700 text-sm">{factor.name}</span>
            <span className="font-bold text-green-700">{factor.value}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500"
              style={{ width: `${factor.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}