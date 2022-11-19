import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviewData = [
        {
            _id:1,
            name: 'Winson Harry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id:2,
            name: 'Diana Hudson',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id:3,
            name: 'Anny Katherin',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold py-2'>Testimonial</h4>
                    <h2 className='text-3xl '>What Our Patients Say</h2>
                </div>
                <figure>
                    <img src={quote} alt="" className='lg:w-48 md:w-48 w-24' />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviewData.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;