import React, { useState } from 'react';
import BannerImage from '../../components/BannerImage/BannerImage';
import BannerTransparent from '../../components/BannerImage/BannerTransparent';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());


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
                            <p>You have selected date: {format(selectedDate, 'PP')}</p>
                        </div>
                    </div>
                </div>
            </div>            
        </header>
    );
};

export default AppointmentBanner;