import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div>
            <img src='/assets/Logo.svg' alt="logo" id='logo'></img>
            <nav className='navigation'>
                <h3 className="menuPages">home</h3>
                <h3 className="menuPages">our products</h3>
                <h3 className="menuPages">term of use</h3>
                <h3 className="menuPages">about us</h3>
                <img src="/assets/ShoppingCart.svg" alt="Shopping Cart"></img>
            </nav>
            <div className='lang'>
                <h3>EN</h3>
                <h4>RU</h4>
                <h4>DE</h4>
            </div>
            <img src='/assets/Menu.svg' alt="menu" id="menu"></img>
        </div>
    );
};

Header.propTypes = {
};

export default Header;