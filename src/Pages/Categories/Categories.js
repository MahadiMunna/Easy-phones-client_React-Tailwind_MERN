import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://easy-phones.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='text-center font-semibold mt-16 text-3xl mb-8 text-green-600'>Select your category</h2>
            <div className='flex justify-around  font-bold md:mx-20 mb-10'>
                {
                    categories.map(category => <div><Link to={`/categories/${category._id}`} key={category._id} className='hover:text-blue-600 cursor-pointer'>{category.brand}</Link></div>)
                }
            </div>
        </div>
    );
};

export default Categories;