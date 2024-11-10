// Cursor.js
import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 10 + 'px';
      cursor.style.top = e.clientY + 10 + 'px';
    };

    // Add mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={cursorStyle}></div>
  );
};

// Cursor style
const cursorStyle = {
  position: 'fixed',
  width: '30px', // Size of the cursor
  height: '30px', // Size of the cursor
  borderRadius: '50%', // Making it circular
  backgroundColor: 'white', // Color and transparency
  pointerEvents: 'none', // Ensure it doesn't interfere with mouse events
  transition: 'transform 0.1s ease', // Smooth movement
  mixBlendMode: 'difference',
};

export default Cursor;
