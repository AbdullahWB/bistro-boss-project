import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='text-white absolute right-0 px-4 py-2 bg-slate-900 mr-4 mt-4'>{price}$</p>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-center'>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;