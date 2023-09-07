import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
      console.log(cartData)

    const dispatch = useDispatch()

    let calculateTotalPrice = cartData.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );


      console.log(calculateTotalPrice)



    // let totalAmmount= cartData.reduce((total,item)=>total + item.quantity*item.price)

    // console.log(totalAmmount)
    const calculateTotalQuantity = () => {
        return cartData.reduce((total, product) => {
            return total + product.quantity;
        }, 0);
    };

    return (
        <>
            <main id="main" className="main">
                {
                    cartData.length === 0 ?
                        <div className="container">

                            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                                <h1>Cart is empty</h1>
                                <i><h2>Please add some product's</h2></i>
                                <Link to="/" className="btn" >Back to home</Link>
                                <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />

                            </section>

                        </div>
                        :
                        <div className="container fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1>Cart Products</h1>
                                </div>
                            </div>

                            <div className="row">
                                {cartData.map((item, index) => (
                                    <div className="col-sm-4" key={index}>
                                        <div className="card">
                                            <img src={`http://localhost:4500/img/${item.image}`} height="300px" alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">
                                                    Price: {item.price}<br />
                                                    Quality: {item.quality}
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-between">
                                                    <button className="btn btn-danger" onClick={() => dispatch({ type: "DECREMENT", payload: item })}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className="btn btn-success" onClick={() => dispatch({ type: "INCREMENT", payload: item })}>+   </button>

                                                </div>
                                                <button className="btn btn-outline-danger mt-2" type="submit" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <p>Total Quantity: {calculateTotalQuantity()}</p>
                                </div>
                                <div className="col-sm-12">
                                    <p>Total Price: {calculateTotalPrice}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Link to="/address">
                                    <button className="btn btn-outline-info" type="button">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                }
            </main>
            <Footer />
        </>
    );
};

export default Cart;
