import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [axiosSecure] = UseAxiosSecure()
    const [cardError, setCardError] = useState()
    const [clientSecret, setClientSecret] = useState()
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState()

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log(card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError(' ')
            console.log(paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // const transactionId = paymentIntent.id;
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                items: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                    }
                })
        }
    }

    return (
        <div className='p-10'>
            <form onSubmit={handleSubmit} className=''>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-outline' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-500'>Transaction complete with transactionId: {transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;