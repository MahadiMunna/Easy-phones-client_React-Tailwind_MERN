import React, { useEffect, useState } from 'react';
import AvailablePhone from '../AvailablePhones/AvailablePhone';

const AllPhones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then(data => {
                setPhones(data);
            })
    }, [])
    return (
        <div>
            <h2 className='text-center font-semibold mt-16 text-3xl mb-8 text-green-600'>All Available Phones</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 my-12'>
                {
                    phones.map(phone => <AvailablePhone key={phone._id} phone={phone}></AvailablePhone>)
                }
            </div>
        </div>
    );
};

export default AllPhones;