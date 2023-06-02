import React from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import { useForm } from "react-hook-form";
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = UseAxiosSecure()
    const { register, handleSubmit, watch, reset, formState: { errors },  } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgURL = imgResponse.data.display_url;
                const { name, price, category, recipe } = data;
                const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('after posting new menu item', data.data);
                        reset()
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Menu item added successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
    };

    console.log(watch("example"));
    return (
        <div className='w-full'>
            <SectionTittle
                subHeading={"What's new?"}
                heading={"ADD AN ITEM"}
            ></SectionTittle>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] mx-auto bg-gray-100 p-10 rounded-lg'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">WRecipe name*</span>
                    </label>
                    <input type="text" name='name' placeholder="Recipe name" className="input input-bordered w-full" {...register("name", { required: true })} />
                </div>
                <div className='flex gap-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Category' {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Category</option>
                            <option>drinks</option>
                            <option>desserts</option>
                            <option>soups</option>
                            <option>pizza</option>
                            <option>Salad</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" {...register("price", { required: true })} />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" {...register("recipe", { required: true })} ></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a file</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                </div>
                <input className='btn btn-primary' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;