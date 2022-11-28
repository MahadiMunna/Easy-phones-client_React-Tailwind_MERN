import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import AvailablePhone from '../../AvailablePhones/AvailablePhone';

const MyProducts = () => {
    useTitle('My Products')
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://easy-phones.vercel.app/my-products/${email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [email])
    return (
        <div>
            {
                products.length===0? <><h2 className='text-3xl font-bold text-center'>Currently you don't add any product</h2></>
                :
                <div className='grid gap-10 grid-cols-1 m-12'>
                {
                    products.map(phone => <AvailablePhone key={phone._id} phone={phone}></AvailablePhone>)
                }
                </div>
            }
        </div>
    );
};

export default MyProducts;