import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-16 mb-16'
            style={{ 
                background: `url(${appointment})`
             }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <div className='lg:w-1/2 md:w-1/2 w-full'> */}
                        <img src={doctor} className="lg:w-1/2 md:w-1/2 -mt-32 -mb-4 hidden lg:block md:block" alt='' />
                    {/* </div> */}
                    
                    <div className='lg:w-1/2 md:w-1/2'>
                        <h4 className='text-primary font-bold text-xl py-2'>Appointment</h4>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default MakeAppointment;