import React from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className="min-h-full p-5 w-5/6 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-full my-12">
                    <div>
                        <img className='' src={chair} alt='' />
                    </div>
                    <div className='lg:mr-12'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <h3 className='mt-5 text-xl font-semibold text-secondary'>You picked: {format(date, 'PP')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;