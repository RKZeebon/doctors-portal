import React from 'react';

const HomePageServiceCard = ({ img, title, body }) => {
    return (
        <div className="card shadow-lg mb-12 mt-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default HomePageServiceCard;