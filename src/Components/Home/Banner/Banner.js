import React from 'react';
import chair from '../../../assets/images/chair.png'


const Banner = () => {
    return (
        <div class="hero min-h-screen text-accent">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                <img className='w-1/2' src={chair} alt='' />
                <div className='w-1/2'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;