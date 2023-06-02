import React from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                        <select {...register("category", { required: true })} className="select select-bordered">
                            <option disabled selected>Category</option>
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