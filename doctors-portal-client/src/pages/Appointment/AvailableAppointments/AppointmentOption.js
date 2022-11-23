import React from 'react';
// import PrimaryButton from '../../components/Buttons/PrimaryButton';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name, slots} = appointmentOption;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary font-bold justify-center">{name}</h2>
                <p className='text-center'>{ slots.length > 0 ? slots[0] : 'No slots available'}</p>
                <p className='text-center'>{ slots.length } { slots.length>1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    {/* <PrimaryButton>BOOK APPOINTMENT</PrimaryButton> */}
                    <label 
                        disabled={slots.length===0}
                        htmlFor="booking-modal" 
                        className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 font-bold my-5"
                        onClick={() => {
                            setTreatment(appointmentOption)
                        }}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;