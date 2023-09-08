import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Address = () => {
  const dispatch = useDispatch()
  const PUBLIC_STRIPE_PUBLISHABLE_KEY =
    'pk_test_51NiF8vSJv0p18kjN1GbZU336KaCkQWArr9WsaHT1QgugwrdsQO4RdyKZ2cr5oivj2Jb8asN5Xf52e9Jp0szzWid900XWszkGfO';
  const carts = useSelector((state) => state.cartData);
  console.log(carts);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:4500/address/useraddress', data)
      .then((res) => {
        console.log(res.data);
        toast.success('Address added');
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data);
      });
  };

  // Stripe payment
  const makePayment = async () => {
    const stripe = await loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const body = {
      carts,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      // Make the API call to create a checkout session
      const response = await fetch(
        'http://localhost:4500/api/create-checkout-session',
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log('Stripe error:', result.error);
      } else if (result.paymentIntent) {
        dispatch({ type: "CLEAR_CART" })
        console.log('Payment successful');
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="container  mb-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card">
              <div className="card-title">
                <h1>ADDRESS</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col"> First Name:
                  <input type="text" name="firstName" className="form-control" placeholder="Enter First Name" {...register('firstName')} /> <p className="coler"></p>
                  </div>
                  <div className="col"> Last Name:
                  <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name" {...register('lastName')} /> <p className="coler"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col"> Address Line 1:
                  <input type="text" name="addressLine1" className="form-control" placeholder="Enter Address Line 1" {...register('addressLine1')} /> <p className="coler"></p>
                  </div>
                  <div className="col"> Address Line 2:
                  <input type="text" name="addressLine2" className="form-control" placeholder="Enter Address Line 2" {...register('addressLine2')} /> <p className="coler"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col"> City:
                  <input type="text" name="city" className="form-control" placeholder="Enter City" {...register('city')} /> <p className="coler"></p>
                  </div>
                  <div className="col"> Postal Code:
                  <input type="text" name="postalCode" className="form-control" placeholder="Enter Postal Code" {...register('postalCode')} /> <p className="coler"></p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-info mt-2"
                  onClick={makePayment}
                >
                  Save Address
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Address;
