import React from 'react';
import './ArrowNextCard.css';

const ArrowNextCard = ({ onClick }) => {
  return (
    <div className="ArrowBlock" onClick={onClick}>
      <div className="RightArrow">
        <img src='/assets/array.svg' alt='RightArrow' className='arrow' />
      </div>
    </div>
  );
};



export default ArrowNextCard;
