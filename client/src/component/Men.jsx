import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Men = () => {
    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4500/product/showproduct')
        .then((res)=>{
            // console.log(res.data)
            const data = res.data
            const filteredMen = data.filter((item) => item.select === "men")
            setData(filteredMen)
        }).catch((error)=>{console.log(error)})
    },[])
// console.log(data)
   
    const user = JSON.parse(localStorage.getItem('usertoken'))
    const admin = JSON.parse(localStorage.getItem('admintoken'))


    const addtocarthandler=()=>{
        if(user){
            toast.success("item added to cart")
        }else{
            toast.warning("you have to login first")
        }
    }
  return (
    <>
    <main id="main" class="main">

    <div className="container fluid mt-5">
        <div className="row ">
            <div className="d-flex justify-content-center  py-4">
                <Link to="#" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">Next Cart.com</span>
                </Link>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div class="col">
                                    <div class="card">
                                        <img src={`http://localhost:4500/img/${item.image}`} class="card-img-top" alt="..." />
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
                                                    <button type="submit" onClick={()=>addtocarthandler()} className='btn btn-success form-control'>Add To Cart</button>

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
 <footer id="footer" className="footer">
 <div className="copyright">
   &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
 </div>
 <div className="credits">

   Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
 </div>
</footer>
</>
  )
}


export default Men