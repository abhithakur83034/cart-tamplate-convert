import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from "react-toastify";
import '../style/logo.css'
import Footer from './Footer';
import { actionItem } from "../redux/action/action";
import { useDispatch, useSelector } from 'react-redux';
function Show() {
    const user = JSON.parse(localStorage.getItem('usertoken'))
    const userdata = JSON.parse(localStorage.getItem('user'))
    // console.log(userdata)
    const admin = JSON.parse(localStorage.getItem('admintoken'))
    const [data, setData] = useState([]);

    const dispatch = useDispatch()


    
  const addtocartData = useSelector((state) => state);
        console.log("show addtocart",addtocartData.productData)


    const productData = useSelector((state) => state.productData);
    // console.log(productData);


    useEffect(() => {
        axios.get('http://localhost:4500/product/showproduct')
            .then((res) => {
                dispatch({ payload: actionItem(res.data), type: "PRODUCT" });
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        setData(productData.data.payload);
    }, [productData]);

    //   console.log(data)

    // add to cart handller=========================================
   
    const handleAddToCart = (item) => {
        if (user) {
          const existingCartItem = addtocartData.find(
            (cartItem) => cartItem._id === item._id
          );
    
          if (existingCartItem) {
            toast.warning("You have already added this product");
          } else {
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...item,userdata },
            });
            toast.success("Item added to cart");
          }
        } else {
          toast.warning("You have to login first");
        }
      };


    return (
        <>
            <main id="main" class="main">

                <div className="container fluid ">
                    <div className="row ">
                        <div className="d-flex justify-content-center py-4">
                            <Link to="#" className="logo d-flex align-items-center w-auto">
                                <img src="assets/img/logo.png" alt="" />
                                <span className="d-none d-lg-block">Next Cart.com</span>
                            </Link>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 ">
                            {
                                data?.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div class="col">
                                                <div class="card">
                                                    <img src={`http://localhost:4500/img/${item.image}`} height="300px" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title"> {item.name} </h5>
                                                        <p class="card-text">Price :: {item.price} </p>
                                                        <p class="card-text">quality :: {item.quality} </p>
                                                    </div>
                                                    <div className="card-footer">
                                                        {
                                                            admin ?
                                                                <button type="submit" className='btn btn-danger form-control'>Delete</button>
                                                                :
                                                                <button type="submit" className='btn btn-success form-control'  onClick={() => handleAddToCart(item)}>Add To Cart</button>

                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </main>
            <Footer />

        </>
    )
}

export default Show