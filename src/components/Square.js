import React, { useState } from 'react';

export default function Square({ value }) {
  const [marker, setMarker] = useState('');

  const handleClick = () => {
    console.log('Clicked!');
    setMarker('X');
  };

  return (
    <button
      className="square"
      onClick={handleClick}
      id={value}
    >
      {marker}
    </button>
  );
}