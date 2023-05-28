import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:3000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('data added to cart');
                    refetch()
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            alert('please Login')
            navigate('/login', {state: {from: location}})
        }
    }



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='text-white absolute right-0 px-4 py-2 bg-slate-900 mr-4 mt-4'>{price}$</p>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-center'>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;