import React from 'react';
import './FirstBlock.css'

const FirstBlock = () => {
    return (
        <div className="FirstBlock">
            <div className="TextOfFirstBlock">
                <img src="/assets/misisy2kclothes.svg" alt='mainTitle' id='mainTitle' />
                <img src="/assets/SALE.svg" alt='sale' id='sale' />
            </div>
            <img src="/assets/ImgFirstBlock.png" className="imgFirstBlock" alt="PhotoOfManWithTongue" />
        </div> 

    );
};


export default FirstBlock;