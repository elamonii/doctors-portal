import React from 'react';
import BannerImage from '../../components/BannerImage/BannerImage';
import BannerTransparent from '../../components/BannerImage/BannerTransparent';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


    return (
        <header className='my-6'>
            <div className="hero">
                <BannerTransparent></BannerTransparent>

                <div className="hero-content flex-col lg:flex-row-reverse">                    
                    <BannerImage></BannerImage>
                    <div className='flex justify-center text-center mr-6 w-[100%] lg:w-[50%] md:w-[50%]'>
                        <div>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </div>            
        </header>
    );
};

export default AppointmentBanner;