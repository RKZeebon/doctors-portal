import React from 'react';

const HomePageServiceCard = ({ img, title, body }) => {
    return (
        <div class="card shadow-lg mb-12 mt-5">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default HomePageServiceCard;