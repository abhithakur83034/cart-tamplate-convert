import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'

const Conttact = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit=(data)=>{
  axios.post("http://localhost:4500/contact/contacts")
  .then((res)=>{
    console.log(res.data)
    toast.success("contact has been added")
  }).catch((error)=>{
    console.log(error)
    toast.error("unable to add contact")
  })
    console.log(data)
  }
  return (
    <>
    <main id="main" className="main">
    {/* <Index/> */}

<div className="pagetitle">
  <h1>Contact</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item">Pages</li>
      <li className="breadcrumb-item active">Contact</li>
    </ol>
  </nav>
</div>
<section className="section contact">
  <div className="row gy-4">
    <div className="col-xl-6">
      <div className="row">
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>A108 Adam Street,<br/>New York, NY 535022</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>
              <Link to='#'>nextcart.com<br/>nextcart.com</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-clock"></i>
            <h3>Open Hours</h3>
            <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-6">
      <div className="card p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required {...register("name")} />
            </div>
            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required {...register("email")}/>
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required {...register("subject")}/>
            </div>
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required {...register("message")}></textarea>
            </div>
            <div className="col-md-12 text-center">
              
              <button type="submit" className='btn btn-info'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</main>
<Footer/>
    </>
  )
}

export default Conttact