import React, { useEffect, useState } from 'react';
import AvailablePhone from '../../AvailablePhones/AvailablePhone';

const AdvertisedItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-semibold mt-16 text-3xl mb-8 text-green-600'>Advertised Items</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 my-12'>
                {
                    items.length? items.map(phone => <AvailablePhone key={phone._id} phone={phone}></AvailablePhone>) : <h4 className='text-center font-semibold text-lg mb-8 text-red-600'>No items available on Advertisement</h4>
                    
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;