// src/components/dashboard/PriceCard.jsx
import React from 'react';

export default function PriceCard({ 
  price = 'KES 1,480', 
  unit = 'per 93kg bag',
  confidence = 87,
  change = '+12%',
  changeText = 'from last month'
}) {
  const chartData = [60, 70, 65, 80, 85, 90, 95, 100];

  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-green-900 to-green-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-6xl font-extrabold mb-2">{price}</div>
            <div className="text-lg opacity-90">{unit}</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-4xl font-bold">{confidence}%</div>
            <div className="text-xs uppercase tracking-wider mt-1">Confidence</div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-white bg-opacity-15 px-5 py-2 rounded-full font-semibold mb-6">
          📈 {change} {changeText}
        </div>

        <div className="bg-white bg-opacity-10 rounded-xl p-6 h-48 flex items-end gap-2">
          {chartData.map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-white/30 to-white/60 rounded-t-lg hover:from-white/50 hover:to-white/80 transition cursor-pointer"
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}