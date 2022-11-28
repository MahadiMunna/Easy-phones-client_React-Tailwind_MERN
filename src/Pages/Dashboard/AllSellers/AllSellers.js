import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

const AllSellers = () => {
    useTitle('All users')
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://easy-phones.vercel.app/seller');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        const confirmation = window.confirm('Are you sure?');
        if (confirmation) {
            fetch(`https://easy-phones.vercel.app/users/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Added to admin panel');
                        refetch();
                    }
                })
        }

    }
    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure?');
        if (confirmation) {
            fetch(`https://easy-phones.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('User deleted successfully');
                        refetch();
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto mt-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    users.map(user => <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                {
                                    user?.role !== 'admin' &&
                                    <div onClick={() => handleMakeAdmin(user._id)} className="badge badge-primary cursor-pointer">Admin</div>
                                }
                            </td>
                            <td>
                                <div onClick={() => handleDelete(user._id)} className="badge badge-error gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    Delete
                                </div>
                            </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default AllSellers;