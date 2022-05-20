import React from 'react';
import HomePageServiceCard from './HomePageServiceCard';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'


const HomePageServices = () => {
    return (
        <div className='mb-16 w-5/6 mx-auto'>
            <h3 className='text-secondary text-xl font-semibold text-center'>OUR SERVICES</h3>
            <div>
                <h2 className='text-3xl font-semibold text-center'>Services We Provide</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <HomePageServiceCard
                        img={fluoride}
                        title='Fluoride Treatment'
                        body="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                    ></HomePageServiceCard>
                    <HomePageServiceCard
                        img={cavity}
                        title='Cavity Filling'
                        body="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                    ></HomePageServiceCard>
                    <HomePageServiceCard
                        img={whitening}
                        title='Teeth Whitening'
                        body="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                    ></HomePageServiceCard>
                </div>
            </div>
            <div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:mr-16'>
                            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageServices;