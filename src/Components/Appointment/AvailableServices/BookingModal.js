import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;

    console.log();
    const handleSubmit = event => {
        event.preventDefault()
        const test = event.target.date.value;
        console.log(test);
        setTreatment(false)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">You are about to book for <span className='text-secondary'>{name}</span></h3>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5 items-center'>
                        <input name='date' type="text" value={date} readOnly className="input input-bordered w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot => <option value={slot} >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Your mail" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Your phone Number" className="input input-bordered w-full max-w-xs" />
                        <input className="btn btn-secondary w-full max-w-xs uppercase" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;