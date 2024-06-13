import React from 'react';

const Button = ({ text, textColor, bgColor, hoverBgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded ${textColor} ${bgColor} hover:${hoverBgColor}`}
    >
      {text}
    </button>
  );
};

export default Button;

  
