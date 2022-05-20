import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { DateContext } from '../Appointment';
import AvailableService from './AvailableService';
import BookingModal from './BookingModal';

const AvailableServices = () => {
    const date = useContext(DateContext)
    const [treatment, setTreatment] = useState({})
    const { data: services, isLoading, refetch } = useQuery('services', () => fetch('services.json').then(res => res.json()))
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-2xl text-center'>
                <h2 className='text-secondary mb-2'>Available Services on {date}</h2>
                <h2>Please select a service.</h2>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AvailableService
                        key={service._id}
                        service={service}
                        refetch={refetch}
                        setTreatment={setTreatment}
                    ></AvailableService>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableServices;