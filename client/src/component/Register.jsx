import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-toastify'
const Register = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
        const file = data.image[0];
        console.log(file)
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', data.name);
        formData.append('mobile', data.mobile);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('address', data.address);
        formData.append('country', data.country);
        formData.append('about', data.about);

    axios
      .post("http://localhost:4500/user/register", formData)
      .then((res) => {
        console.log(res.data)
        // const result = res.data
        reset();
        toast.success('user registered')
      }).catch((error) => {
        console.log(error)
        toast.error(error)
      })
  }
  return (
    <>
      <main id="main" class="main">
        {/* <Index /> */}
        <div className="container " style={{background:"rgba(192,192,192,0.3)"}}>

              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4">
                    <Link to="#" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">Next Cart.com</span>
                    </Link>
                  </div>

                  <div className="card mb-3" >

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                        <p className="text-center small">Enter your personal details to create account</p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12">
                          <label for="yourImage" className="form-label">Your Image</label>
                          <input type="file" name="image" className="form-control" id="yourImage" required {...register('image')} />
                          <div className="invalid-feedback">Please, enter your image!</div>
                        </div>
                        <div className="col-12">
                          <label for="yourName" className="form-label">Your Name</label>
                          <input type="text" name="name" className="form-control" id="yourName" required {...register('name')} />
                          <div className="invalid-feedback">Please, enter your name!</div>
                        </div>

                        <div className="col-12">
                          <label for="yourEmail" className="form-label">Your Email</label>
                          <input type="email" name="email" className="form-control" id="yourEmail" required {...register('email')} />
                          <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                        </div>



                        <div className="col-12">
                          <label for="yourmobile" className="form-label">Mobile</label>
                          <input type="number" name="mobile" className="form-control" id="yourmobile" required {...register('mobile')} />
                          <div className="invalid-feedback">Please enter your number!</div>
                        </div>

                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required {...register('password')} />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>
                        <div className="col-12">
                          <label for="About" className="form-label">Country</label>
                          <input type="text" name="country" className="form-control" id="About" required {...register('country')} />
                          <div className="invalid-feedback">Please enter your country!</div>
                        </div>
                        <div className="col-12">
                          <label for="yourAddress" className="form-label">address</label>
                          <input type="text" name="address" className="form-control" id="yourAddress" required {...register('address')} />
                          <div className="invalid-feedback">Please enter your address!</div>
                        </div>
                        <div className="col-12">
                          <label for="About" className="form-label">about yourself</label>
                          <input type="text" name="about" className="form-control" id="About" required {...register('about')} />
                          <div className="invalid-feedback">Please enter your about yourself!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                            <label className="form-check-label" for="acceptTerms">I agree and accept the <Link to="#">terms and conditions</Link></label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Create Account</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                      </form>

                    </div>
                  </div>



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

export default Register