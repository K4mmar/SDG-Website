import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95 shadow-md";
  
  const variants = {
    primary: "bg-sdg-red text-white hover:bg-red-700 hover:shadow-lg",
    secondary: "bg-sdg-black text-white hover:bg-gray-800 hover:shadow-lg",
    outline: "border-2 border-sdg-black text-sdg-black hover:bg-sdg-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};