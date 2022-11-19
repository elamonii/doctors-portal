import React from 'react';

const Review = ({review}) => {
    const {name, img, location, review: userReview} = review;
    return (
        <div className="card bg-base-100 shadow-xl my-5">
            <div className="card-body">
                
                <p>{userReview}</p>
                <div className="flex items-start justify-around mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className=''>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;