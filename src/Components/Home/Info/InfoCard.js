import React from 'react';

const InfoCard = ({ img, title, body, bgColor }) => {
    return (
        <div class={`card lg:card-side shadow-xl  text-white p-3 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default InfoCard;