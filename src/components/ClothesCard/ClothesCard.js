import React from 'react';
import './ClothesCard.css'

const ClothesCart = ({className="card", src=""}) => {
    return (
        <div className="cards">
            <div className="GoodsCard">
                <img className={className} alt="GoodsCard" src={src} />
            </div>
        </div>
    );
};


export default ClothesCart;