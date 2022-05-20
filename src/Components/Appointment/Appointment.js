import { format } from 'date-fns';
import React, { createContext, useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableServices from './AvailableServices/AvailableServices';



export const DateContext = createContext(new Date())

const Apointment = () => {
    const [date, setDate] = useState(new Date());
    const formatedDate = format(date, 'PP')
    return (
        <div>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <DateContext.Provider value={formatedDate}>
                <AvailableServices />
            </DateContext.Provider>
        </div>
    );
};

export default Apointment;