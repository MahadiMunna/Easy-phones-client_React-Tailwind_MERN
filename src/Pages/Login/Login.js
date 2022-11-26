import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const { register, formState:{errors}, handleSubmit } = useForm();
    const [error,setError] = useState('');

    const handleLogin = data =>{
        console.log(data);
        setError('');
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center font-bold text-green-600 mb-10'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' {...register("email",{required:'Email is required'})} placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password",{required:'Password is required'})} placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text hover:text-red-600"><Link to='/forget-password'>Forget Password?</Link></span>
                        </label>
                    </div>

                    <input className='btn btn-outline w-full' value='Login' type="submit" />
                    <div className='mt-5'>
                        { error && <p className='text-red-600'>{error}</p> }
                    </div>
                </form>
                <p>New to Easy Phones? <Link className='hover:text-blue-600 font-bold' to='/signup'>Create new account.</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;