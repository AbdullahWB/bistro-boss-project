import React from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTittle
                subHeading={"At a Glance!"}
                heading={"PAYMENT HISTORY"}
            ></SectionTittle>
            <h1>Total Payments:</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;