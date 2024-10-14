import React from 'react';
import './SaveButton.css';

export const SaveButton = ({ width, height, text }) => {
  const buttonStyle = {
    width: width || '120px',   
    height: height || '40px',  
  };

  return (
    <button className={'save-button'} style={buttonStyle}>
      {text || 'SAVE'} 
    </button>
  );
}

