import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Footer from './Footer'

const Resetpassword = () => {
  const {id, token} = useParams()
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:4500/user/resetpassword/${id}/${token}`, data)
      .then((res) => {
        console.log(res.data)
        const result = res.data
        if (result.status === "success") {
          reset();
          toast.success('reset password successfully');
          navigate('/')
        }

      }).catch((error) => {
        console.log(error)
        toast.error(error.response.data.message)
      })
  }
  return (
    <>
     <main id="main" class="main">
        {/* <Index /> */}
        <div className="container">


          <section className="section  ">
            <div className="container">
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
                        <h5 className="card-title text-center pb-0 fs-4">Reset Your Password</h5>
                        <p className="text-center small">Enter your password to reset</p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit(onSubmit)}>


                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword"  {...register('password')} required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Reset Password</button>
                        </div>
                        
                      </form>

                    </div>
                  </div>



                </div>
              </div>
            </div>

          </section>

        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Resetpassword