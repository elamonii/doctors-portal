import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    return (

        <div className = {`card lg:card-side shadow-xl py-6 px-6 text-white ${bgClass}`} > 
            <figure > 
                <img src={icon} alt="Movie"/>
            </figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;