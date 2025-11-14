// src/components/common/Button.jsx
import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  ...props 
}) {
  const baseStyles = 'py-3 px-6 rounded-xl font-bold transition shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800',
    secondary: 'bg-white text-green-700 border-2 border-green-200 hover:border-green-400',
    text: 'text-green-700 hover:text-green-900'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}