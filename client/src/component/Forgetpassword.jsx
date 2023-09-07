import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from "react-toastify";
import Footer from './Footer';

const Forgetpassword = () => {
    const {register, handleSubmit} = useForm()

   const onSubmit=(data)=>{
    // console.log(data)
        axios.post("http://localhost:4500/user/resetoldpassword",data)
        .then((res)=>{
            // console.log(res.data)
            toast.success("link has been sent")
        }).catch((error)=>{
            // console.log(error)
            toast.error(error.response.data.message)
        })
    }
  return (
    <>
    <main id="main" class="main">
    {/* <Index/> */}
    <div className="container" style={{background:"rgba(192,192,192,0.3)"}}>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <div className="d-flex justify-content-center py-4">
                            <Link to="#" className="logo d-flex align-items-center w-auto">
                                <img src="assets/img/logo.png" alt="" />
                                <span className="d-none d-lg-block">Next Cart.com</span>
                            </Link>
                        </div>
                <div className="card">   
                    <div className="card-body">
                    <div className="card-title fs-3 "><p>Forgot Your Password </p>
                    <p className='fs-6'>Please enter the email address you'd like your passwor resetinformation sent to</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Enter email address</label> 
                        <p><input type="email" className='form-control mt-2' placeholder='your email address' name='email' {...register("email",{required:true})} /></p>
                    <p><input type="submit" value="Request reset link" className='btn btn-info form-control' /></p>
                    <p className='text-center'>
                        <Link to="/login">
                        Back To login
                        </Link>
                    </p>
                    </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-4"></div>
        </div>
    </div>
</main>
<Footer/>

    </>
  )
}

export default Forgetpassword