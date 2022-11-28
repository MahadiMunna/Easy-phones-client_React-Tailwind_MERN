import React from 'react';

const BookModal = (product) => {
    const { name, img, price, originalPrice, location, used, seller } = product;
    return (
        <>
            <input type="checkbox" id="booknow" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booknow" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4"></p>
                </div>
            </div>
        </>
    );
};

export default BookModal;