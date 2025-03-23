import React from 'react';
import PropTypes from 'prop-types';

const FirstBlock = () => {
    return (
        <div>
            <div className="TextOfFirstBlock">
                <img src="/assets/misisy2kclothes.svg" alt='mainTitle' />
                <img src="/assets/SALE.svg" alt='sale' />
            </div>
            <img src="/assets/ImgFirstBlock.png" className="imgFirstBlock" alt="PhotoOfManWithTongue" />
        </div> 

    );
};

FirstBlock.propTypes = {
    
};

export default FirstBlock;