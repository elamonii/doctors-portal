import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold py-2'>Testimonial</h4>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} alt="" className='lg:w-48 md:w-48 w-24' />
                </figure>
            </div>
            <div></div>
            
        </section>
    );
};

export default Testimonial;