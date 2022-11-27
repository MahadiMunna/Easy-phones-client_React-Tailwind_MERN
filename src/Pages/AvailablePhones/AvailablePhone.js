import React from 'react';

const AvailablePhone = ({ phone }) => {
    const { name, img, price, originalPrice, location, used, seller } = phone;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <img src={img} alt="" />

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price} <br />Original Price : {originalPrice} <br />Location : {location} <br />Years of use : {used} <br />Seller : {seller}</p>
                
                <div className="card-actions justify-between items-center">

                </div>
            </div>
        </div>
    );
};

export default AvailablePhone;