import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard');
    const {user} = useContext(AuthContext);
    return (
        <div className='flex flex-col'>
            <h2 className='text-center font-semibold text-3xl mt-12 mb-5'>Welcome to Dashboard</h2>
            <img src={user?.photoURL} alt="" />
            <h2 className='text-center font-semibold text-3xl mb-5'>{user?.displayName}</h2>
        </div>
    );
};

export default Dashboard;