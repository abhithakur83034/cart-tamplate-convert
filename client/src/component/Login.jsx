import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import Footer from './Footer'
const Login = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4500/user/login", data)
      .then((res) => {
        console.log(res.data)
        const result = res.data
        const user = result.user
        const usertoken = result.usertoken
        if (result) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("usertoken", JSON.stringify(usertoken));
          reset();
          toast.success('user login');
          navigate('/')
        }

      }).catch((error) => {
        console.log(error.response)
        toast.error(error.response.data.result)
      })
  }
  return (
    <>
      <main id="main" className="main">
        {/* <Index /> */}
        <div className="container" style={{background:"rgba(192,192,192,0.3)"}}>


              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4">
                    <Link to="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">Next Cart.com</span>
                    </Link>
                  </div>

                  <div className="card mb-3">

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter your email & password to login</p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit(onSubmit)}>

                        <div className="col-12">
                          <label for="yourUsername" className="form-label">Email</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="emial" name="email" className="form-control" id="youremail" {...register('email')} required />
                            <div className="invalid-feedback">Please enter your email.</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword"  {...register('password')} required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"  {...register('remember')} />
                            <label className="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0"> <Link to="/register">Create an account</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/forgetpassword">Forget Password</Link> </p>
                        </div>
                      </form>

                    </div>
                  </div>



                </div>
              </div>
            </div>

         
      </main>
      <Footer/>

    </>
  )
}

export default Login