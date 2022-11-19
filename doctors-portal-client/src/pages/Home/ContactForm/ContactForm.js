import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='py-10 my-10 mx-auto items-center'
            style={{ 
                background: `url(${appointment})`
             }}
        >   
            <div className='mb-10 mx-5'>
                <h4 className='text-primary font-bold text-xl py-2 text-center'>Contact Us</h4>
                <h1 className='lg:text-3xl md:text-3xl text-2xl text-white text-center'>Stay Connected With Us</h1>
            </div>
            <div className='flex justify-center'>
                <form className='d-flex space-y-5 lg:w-[30%] w-full mx-5'>
                    <input type="email" placeholder="Email address" className="input w-full" /> <br />
                    <input type="text" placeholder="Subject" className="input w-full" /><br />
                    <textarea className="textarea w-full" placeholder="Your Message"></textarea>
                    <div className='text-center'><PrimaryButton>Submit</PrimaryButton></div>
                </form>
            </div>


        {/* <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="button">Login</button>
        </form>             */}
            
        </section>
    );
};

export default ContactForm;