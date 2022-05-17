import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const HomePageAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,

        }}
            className='mt-40 mb-16'>
            <div className='w-5/6 mx-auto flex justify-center items-center px-5'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px] w-[862px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 px-5'>
                    <h3 className='text-xl text-primary font-bold pt-5'>Appointment</h3>
                    <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                    <p className='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>

                </div>
            </div>
        </section>
    );
};

export default HomePageAppointment;
