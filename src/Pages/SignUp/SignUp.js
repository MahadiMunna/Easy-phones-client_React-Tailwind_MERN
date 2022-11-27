import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const imgbbKey = process.env.REACT_APP_imgbb_key;

    const handleSignUp = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageData => {
            if(imageData.success){
                console.log(imageData.data.url);
                setImgUrl(imageData.data.url);
            }
        })
        createUser(data.email,data.password)
        .then(result=>{
            setError('');
            const user = result.user;
            const userInfo = {
                displayName : data.name,
                photoURL : imgUrl
            }
            updateUser(userInfo)

            .then(()=>{})
            .catch(error=>console.log(error))
        })
        .catch(error=>setError(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center font-bold text-green-600 mb-10'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' {...register("name", { required: 'Name is required' })} placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role='alert'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload your Photo</span>
                        </label>

                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                            <span className="label-text">Are you seller or buyer?</span>
                        </label>
                        <select {...register("role")} className="select select-bordered w-full max-w-xs">
                            <option defaultValue>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: 'Email is required' })} placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} placeholder="Enter a password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}

                    </div>

                    <input className='btn btn-outline w-full mt-5' value='Sign up' type="submit" />
                    <div className='mt-5'>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </form>
                <p>Already have an account? <Link className='hover:text-blue-600 font-bold' to='/login'>Please login.</Link></p>
            </div>
        </div>
    );
};

export default SignUp;