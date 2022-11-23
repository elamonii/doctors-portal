import React from 'react';
import clockIcon from '../../assets/icons/clock.svg';
// import markerIcon from '../../assets/icons/marker.svg';
// import phoneIcon from '../../assets/icons/phone.svg';

const Info = () => {
    return(
    
    
    <div className= "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4" >

        <div className = "card card-side bg-primary shadow-xl px-6" > 
            <figure > 
                <img src={clockIcon} alt="Movie"/>
            </figure>

            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>

        <div className = "card w-96 bg-primary text-primary-content" > 
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div> 
        
        <div className = "card w-96 bg-primary text-primary-content" > 
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Info;
