import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';

const AllUsers = () => {
    useTitle('All users')
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)
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
                                <div className="badge badge-primary cursor-pointer">Admin</div>
                            </td>
                            <td>
                                <div className="badge badge-error gap-2 cursor-pointer">
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

export default AllUsers;