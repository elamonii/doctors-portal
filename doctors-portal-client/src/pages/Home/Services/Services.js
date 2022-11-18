import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'lorem ipsum set amet lorem ipsum set amet lorem ipsum set amet lorem ipsum set amet ',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'lorem ipsum set amet lorem ipsum set amet lorem ipsum set amet lorem ipsum set amet ',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'lorem ipsum set amet lorem ipsum set amet lorem ipsum set amet lorem ipsum set amet ',
            img: whitening
        },
    ];
    return (
        <div className='pb-16'>
            <div className='pb-10'>
                <h4 className='text-xl font-bold text-center text-primary uppercase mt-16'>Our Services</h4>
                <h2 className='text-3xl text-center text-neutral mt-3 mb-7'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>            
        </div>
    );
};

export default Services;