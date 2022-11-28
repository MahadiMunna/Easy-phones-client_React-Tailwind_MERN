import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AvailablePhone from '../../AvailablePhones/AvailablePhone';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-products/${email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [email])
    return (
        <div>
            <div className='grid gap-10 grid-cols-1 m-12'>
                {
                    products.map(phone => <AvailablePhone key={phone._id} phone={phone}></AvailablePhone>)
                }
            </div>
        </div>
    );
};

export default MyProducts;