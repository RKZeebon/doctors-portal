import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='' style={{
            background: `url(${footerBg})`
        }}>
            <div className='w-5/6 mx-auto pb-12'>
                <div className='lg:flex justify-between'>
                    <div className='flex flex-col mb-16'>
                        <h2 className='text-lg font-semibold mb-2'>SERVICES</h2>
                        <Link className='text-lg' to='#'>Emergency Checkup</Link>
                        <Link className='text-lg' to='#'>Monthly Checkup</Link>
                        <Link className='text-lg' to='#'>Weekly Checkup</Link>
                        <Link className='text-lg' to='#'>Deep Checkup</Link>
                    </div>
                    <div className='flex flex-col mb-16'>
                        <h2 className='text-lg font-semibold mb-2'>ORAL HEALTH</h2>
                        <Link className='text-lg' to="#">Fluoride Treatment</Link>
                        <Link className='text-lg' to="#">Cavity Filling</Link>
                        <Link className='text-lg' to="#">Teath Whitening</Link>

                    </div>
                    <div className='mb-16'>
                        <h2 className='text-lg font-semibold mb-2'>OUR ADDRESS</h2>
                        <p className='text-lg'>New York - 101010 Hudson</p>

                    </div>
                </div>
                <p className='text-center text-lg'>Copyright © 2022 All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;