import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div class="min-h-full p-5 w-5/6 mx-auto">
            <div style={{ background: `url(${bg})` }} class="hero-content flex-col lg:flex-row-reverse max-w-full my-12">
                <div>
                    <img className='' src={chair} alt='' />
                </div>
                <div className=''>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;