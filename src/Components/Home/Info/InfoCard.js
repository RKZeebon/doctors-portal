import React from 'react';

const InfoCard = ({ img, title, body, bgColor }) => {
    return (
        <div className={`card lg:card-side shadow-xl  text-white p-3 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default InfoCard;