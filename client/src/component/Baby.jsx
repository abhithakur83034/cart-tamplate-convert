import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'

const Baby = () => {
    const dispatch = useDispatch()
    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4500/product/showproduct')
        .then((res)=>{
            // console.log(res.data)
            const data = res.data
            const filteredBaby = data.filter((item) => item.select === "baby")
            setData(filteredBaby)
        }).catch((error)=>{console.log(error)})
    },[])
// console.log(data)
   
    const user = JSON.parse(localStorage.getItem('usertoken'))
    const userdata = JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    // const userID = user._id
    // console.log(userID)
    const admin = JSON.parse(localStorage.getItem('admintoken'))

    const addtocartData = useSelector((state) => state.cartData);



    const handelDelete=(_id)=>{
        axios.delete(`http://localhost:4500/product/delete/${_id}`)
        .then((res)=>{
            console.log(res.data)
            if(res.data.deletedCount === 1)
            toast.success("Product deleted")
        }).catch((error)=>{
            console.log(error)
            toast.error(error)
        })
    }




    const handleAddToCart = (item) => {
      if (user) {
        const existingCartItem = addtocartData.find((cartItem) => cartItem._id === item._id);
        
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
    <main id="main" className="main">

    <div className="container fluid ">
        <div className="row ">
            <div className="d-flex justify-content-center  py-4">
                <Link to="#" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">Next Cart.com</span>
                </Link>
            </div>
            <div class="row row-cols-1 row-cols-md-3 ">
                {
                    data.map((item, index) => {
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
                                                    <button type="submit" className='btn btn-danger form-control' onClick={() => handelDelete(item._id)}>Delete</button>
                                                    :
                                                    <button type="submit"  onClick={() => handleAddToCart(item)} className='btn btn-success form-control'>Add To Cart</button>

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
 <Footer/>
</>
  )
}

export default Baby