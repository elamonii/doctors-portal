import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const Banner = () => {
    return (
< div className = "hero">

            {/* =====================BACKGROUND TRANSPARENT IMAGE====================== */}
            <div class = "relative w-full h-full" > 
                <div class="absolute inset-0 w-full h-full bg-white bg-opacity-90"></div>
                <img src={chair} alt="chair"/>
            </div>
            {/* =====================BACKGROUND TRANSPARENT IMAGE====================== */}



            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair}  className="rounded-lg shadow-2xl w-[100%]" alt='' />

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