import React from 'react';
import './ThirdBlock.css';

const ThirdBlock = () => {
    return (
        <div className='ThirdBlock'>
            <h1 className='h1Title'>catalog</h1>
            <div className="catalog">
                <div className="CatalogColumn">
                    <h2 className='h2Title'>men</h2>
                    <div className="ListOfCatalog">
                        <h4>t-shirts</h4>
                        <h4>trousers</h4>
                        <h4>jackets</h4>
                        <h4>accessories</h4>
                    </div>
                </div>
                <div className="">
                    <h2 className='h2Title'>women</h2>
                    <div className="ListOfCatalog">
                        <h4>t-shirts</h4>
                        <h4>trousers</h4>
                        <h4>jackets</h4>
                        <h4>accessories</h4>
                        <h4>skirts</h4>
                    </div>
                </div>
                <div className="">
                    <h2 className='h2Title'><span id='TextPsycho'>(psycho)</span>kids</h2>
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