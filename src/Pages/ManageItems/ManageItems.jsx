import React from 'react';
import SectionTittle from '../../Components/SectionTittle';
import useMenu from '../../Hooks/useMenu';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { FaRegTrashAlt } from 'react-icons/fa';

const ManageItems = () => {
    const [menus, , refetch] = useMenu()
    const [axiosSecure] = UseAxiosSecure()

    const handleDelete = (menu) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${menu._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <SectionTittle
                subHeading={"Hurry Up!"}
                heading={"MANAGE ALL ITEMS"}
            ></SectionTittle>
            <div className="overflow-x-auto flex flex-col p-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((menu, index) => <tr
                                key={menu._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {menu.name}
                                </td>
                                <td>{menu.price}$</td>
                                <th>
                                    Update
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(menu)} className="btn btn-ghost text-white rounded-full h-8 bg-red-500 btn-xs"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;