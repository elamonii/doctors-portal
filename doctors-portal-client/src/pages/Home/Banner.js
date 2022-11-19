import React from 'react';
import BannerImage from '../components/BannerImage/BannerImage';
import BannerTransparent from '../components/BannerImage/BannerTransparent';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const Banner = () => {
    return (
< div className = "hero">

            {/* =====================BACKGROUND TRANSPARENT IMAGE====================== */}
            <BannerTransparent></BannerTransparent>
            {/* =====================BACKGROUND TRANSPARENT IMAGE====================== */}



            <div className="hero-content flex-col lg:flex-row-reverse">
                <BannerImage></BannerImage>

                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>

                </div>
            </div>
        </div>

    );
};

export default Banner;