import React from 'react';

import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {

    return (
        <div style={{
            background: `url(${appointment})`
        }} className="mb-24 pb-20" >
            <div className='w-5/6 mx-auto'>
                <div className='text-center pt-16 pb-8'>
                    <h3 className='text-secondary text-2xl '>Contact Us</h3>
                    <h1 className='text-4xl text-white'>Stay connected with us</h1>
                </div>

                <div>
                    <form className='flex flex-col lg:w-2/5 mx-auto gap-4'>
                        <input className='rounded-xl py-4 text-lg pl-5' placeholder='Your Email' type="email" name="" id="" />
                        <input className='rounded-xl py-4 text-lg pl-5' placeholder='Subject' type="text" name="" id="" />
                        <textarea className='rounded-xl py-4 text-lg pl-5' placeholder='Your message' name="message" id="" cols="50" rows="5"></textarea>
                        <input className='text-xl btn btn-primary text-white font-semibold bg-gradient-to-r from-secondary to-primary w-40 mx-auto' type="submit" value="Submit" />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;