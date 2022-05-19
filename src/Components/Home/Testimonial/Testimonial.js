import React from 'react';

const Testimonial = ({ body, name, location, img }) => {
    return (
        <div class="card shadow-xl">
            <div class="card-body">

                <p>{body}</p>
                <div className='flex items-center mt-4'>
                    <div class="avatar mr-4">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;