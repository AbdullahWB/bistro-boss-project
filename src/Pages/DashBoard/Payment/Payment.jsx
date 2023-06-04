import React from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../Hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTittle
                subHeading={"At a Glance!"}
                heading={"PAYMENT HISTORY"}
            ></SectionTittle>
            <h1>Total Payments:</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;