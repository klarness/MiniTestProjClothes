import React from 'react';
import './ThirdBlock.css';

const ThirdBlock = () => {
    return (
        <div>
            <h1>catalog</h1>
            <div className="catalog">
                <div className="CatalogColumn">
                    <h2>men</h2>
                    <div className="ListOfCatalog">
                        <h4>t-shirts</h4>
                        <h4>trousers</h4>
                        <h4>jackets</h4>
                        <h4>accessories</h4>
                    </div>
                </div>
                <div className="">
                    <h2>women</h2>
                    <div className="ListOfCatalog">
                        <h4>t-shirts</h4>
                        <h4>trousers</h4>
                        <h4>jackets</h4>
                        <h4>accessories</h4>
                        <h4>skirts</h4>
                    </div>
                </div>
                <div className="">
                    <h2><span id='TextPsycho'>(psycho)</span>kids</h2>
                    <div className="ListOfCatalog">
                        <h4>t-shirts</h4>
                        <h4>accessories</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ThirdBlock;