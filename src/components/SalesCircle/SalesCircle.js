import React from 'react';
import './SalesCircle.css';

const SalesCircle = ({ size, speed, direction = 'normal', className = '' }) => {
  return (
    <div
      className={`circle ${className}`}
      style={{
        width: size,
        height: size,
        animationDuration: speed,
        animationDirection: direction,
        backgroundImage: 'url(/assets/salesCircle.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default SalesCircle;
