import React from 'react';
import Banner from './Banner/Banner';
import HomePageAppointment from './HomePageAppointment/HomePageAppointment';
import HomePageServices from './HomePageServices/HomePageServices';
import Info from './Info/Info';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <HomePageServices />
            <HomePageAppointment />
        </div>
    );
};

export default Home;