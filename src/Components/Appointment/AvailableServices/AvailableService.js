import React from 'react';

const AvailableService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-2xl text-secondary">{name}</h2>
                <p className='text-lg'>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span>No slot available</span>
                    }
                </p>
                <p className='text-lg'>{slots.length} space available.</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;