import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-5/6 mx-auto'>
            <InfoCard
                title="Opening Hour"
                body="Lorem Ipsum is simply dummy text of the pri"
                img={clock}
                bgColor='bg-gradient-to-r from-secondary to-primary'
            ></InfoCard>
            <InfoCard
                title="Visit our location"
                body="Brooklyn, NY 10036, United States"
                img={marker}
                bgColor='bg-accent'
            ></InfoCard >
            <InfoCard
                title="Contact us now"
                body="+000 123 456789"
                img={phone}
                bgColor='bg-gradient-to-r from-secondary to-primary'
            ></InfoCard>
        </div >
    );
};

export default Info;