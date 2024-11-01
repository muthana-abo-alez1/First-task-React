import React from 'react';
import './Button.css';

export const Button = ({ width, height, text, variant }) => {
  const buttonStyle = {
    width: width || '120px',
    height: height || '40px',
  };

  const buttonClass = variant === 'cancel' ? 'cancel-button' : 'save-button';

  return (
    <button className={buttonClass} style={buttonStyle}>
      {text || (variant === 'cancel' ? 'Cancel' : 'SAVE')}
    </button>
  );
};