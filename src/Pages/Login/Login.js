import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const handleLogin = data => {
        console.log(data);
        setError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))

    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                const profile = {
                    name: user.displayName,
                    email: user.email,
                    role: "Buyer"
                }
                fetch('https://easy-phones.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(profile)
                })
                toast.success('Login Successfully')
            })
            .catch(error => {
                console.log(error)
            })
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
                        <input type='text' {...register("email", { required: 'Email is required' })} placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: 'Password is required' })} placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text hover:text-red-600"><Link to='/forget-password'>Forget Password?</Link></span>
                        </label>
                    </div>

                    <input className='btn btn-outline w-full' value='Login' type="submit" />
                    <div className='mt-5'>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </form>
                <p>New to Easy Phones? <Link className='hover:text-blue-600 font-bold' to='/signup'>Create new account.</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;