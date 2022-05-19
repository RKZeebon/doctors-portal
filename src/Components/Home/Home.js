import React from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import HomePageAppointment from './HomePageAppointment/HomePageAppointment';
import HomePageServices from './HomePageServices/HomePageServices';
import Info from './Info/Info';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <HomePageServices />
            <HomePageAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;