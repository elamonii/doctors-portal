import React from 'react';
import chair from '../../../assets/images/chair.png';

const BannerTransparent = () => {
    return (
            <div class = "relative w-full h-full" > 
                <div class="absolute inset-0 w-full h-full bg-white bg-opacity-90"></div>
                <img src={chair} alt="chair"/>
            </div>
    );
};

export default BannerTransparent;