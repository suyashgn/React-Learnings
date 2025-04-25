import React, { useState } from 'react';

function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
    backgroundColor: isHovered ? '#353d96' : '#daf7d9',
    color: isHovered ? '#daf7d9': '#353d96',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '111px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     Hover Me
    </button>
  );
}

export default HoverButton;
