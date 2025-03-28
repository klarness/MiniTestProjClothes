import React from 'react';
import './FooterBlock.css'

const FooterBlock = () => {
    return (
        <div className='backGroundFooter'>
            <h2 >there are our contacts</h2>
            <div className='TextBlock'>
                <div className="firstColumnText">
                    <div className='iconPLusText'>
                        <img src='/assets/email.svg' alt='icon' className='icon' />
                        <h4 className='h4Text'>damn@edu.misis.ru</h4>
                    </div>
                    <div className='iconPLusText'>
                        <img src='/assets/tg.svg' alt='icon' className='icon' />
                        <h4 className='h4Text'>@itatmisis</h4>
                    </div>
                </div>
                <h4 className='h4Text'>All rights reserved</h4>
            </div>
        </div>
    );
};


export default FooterBlock;