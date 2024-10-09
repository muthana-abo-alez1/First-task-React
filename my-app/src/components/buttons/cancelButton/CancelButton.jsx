import React from 'react';
import './CancelButton.css';

export const CancelButton = ({ width, height, text }) => {
  const buttonStyle = {
    width: width || '120px',   
    height: height || '40px',  
  };

  return (
    <button className={'cancel-button'} style={buttonStyle}>
      {text || 'Cancel'} 
    </button>
  );
}

