import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt, FaUsersCog } from 'react-icons/fa';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    alert(`${user._id} is now admin`)
                }
            })
    }

    const handleDelete = user => {
        // 
    }

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Home</title>
            </Helmet>
            <h1>Total Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white rounded-full h-8 bg-[#D1A054] btn-xs"><FaUsersCog></FaUsersCog></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white rounded-full h-8 bg-red-500 btn-xs"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;