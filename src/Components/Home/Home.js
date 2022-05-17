import React from 'react';
import Banner from './Banner/Banner';
import HomePageServices from './HomePageServices/HomePageServices';
import Info from './Info/Info';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Banner />
            <Info />
            <HomePageServices />
        </div>
    );
};

export default Home;