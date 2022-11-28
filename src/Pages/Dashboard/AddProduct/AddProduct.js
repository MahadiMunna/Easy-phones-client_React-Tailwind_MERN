import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const AddProduct = () => {
    useTitle('Add Products')
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [imgUrl, setImgUrl] = useState('');
    const navigate = useNavigate();
    const imgbbKey = process.env.REACT_APP_imgbb_key;
    const handleAddProducts = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                    setImgUrl(imageData.data.url);
                }
            })
        const product = {
            brand: data.brand,
            name: data.name,
            img: imgUrl,
            price: data.price,
            originalPrice: data.originalPrice,
            location: data.location,
            used: data.used,
            seller: user.displayName,
            email: user.email
        }
        fetch('https://easy-phones.vercel.app/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        toast.success('Product added successfully');
        navigate('/dashboard/my-products');
    }
    return (
        <div className='h-[800px] flex justify-left items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center font-bold text-green-600 mb-10'>Add a product</h2>
                <form onSubmit={handleSubmit(handleAddProducts)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type='text' {...register("seller")} value={`${user.displayName}`} disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type='text' {...register("email")} value={`${user.email}`} disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Brand Name of Phone?</span>
                        </label>
                        <select {...register("brand")} className="select select-bordered w-full max-w-xs">
                            <option defaultValue>Iphone</option>
                            <option>Nokia</option>
                            <option>Samsung</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Name</span>
                        </label>
                        <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload Phone Photo</span>
                        </label>
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type='text' {...register("price")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type='text' {...register("originalPrice")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type='text' {...register("location")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Years of use</span>
                        </label>
                        <input type='text' {...register("used")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input className='btn btn-outline w-full mt-5' value='Add Product' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;