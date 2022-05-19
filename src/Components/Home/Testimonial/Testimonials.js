import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import Testimonial from './Testimonial';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonials = () => {
    return (
        <div className='w-5/6 mx-auto mb-24'>
            <div className='flex justify-between items-center mb-16'>
                <div>
                    <h3 className='text-secondary text-2xl font-semibold mb-2'>Testimonial</h3>
                    <h1 className='text-4xl font-semibold mb-2'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Testimonial
                    body="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
                    name='Winson Herry'
                    location='California'
                    img={people1}
                ></Testimonial>
                <Testimonial
                    body="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
                    name='Winson Herry'
                    location='California'
                    img={people2}
                ></Testimonial>
                <Testimonial
                    body="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
                    name='Winson Herry'
                    location='California'
                    img={people3}
                ></Testimonial>
            </div>
        </div >
    );
};

export default Testimonials;