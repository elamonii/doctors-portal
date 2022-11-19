import React from 'react';
import chair from '../../../assets/images/chair.png';

const BannerImage = () => {
    return (
        <img src={chair}  className="rounded-lg shadow-2xl w-[100%] lg:w-[50%]" alt='' />
    );
};

export default BannerImage;