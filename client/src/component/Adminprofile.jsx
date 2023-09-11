import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Adminprofile = () => {

    
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4500/admin/adminshow')
            .then((res) => {
                // console.log(res.data)
                setAdmin(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    console.log(admin)
  return (
    <>
    <main id="main" className="main">
        {/* <Index /> */}
        <section className="section profile">
          <div className="row">
                    <div className="col-xl-4">

                      <div className="card">
                        
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                        <img src="assets/img/abhi.jpg" alt="Admin-Img" className="rounded-circle" />
                          <h2>{admin.name}</h2>
                          <h3>{admin.adminemail}</h3>
                          <div className="social-links mt-2">
                            <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                            <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                            <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                            <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title">About</h5>
                          <img src="assets/img/abhi.jpg" height="200px" alt="Admin-Img" className="rounded-circle" />
                        <p className="small fst-italic">{admin.about}  </p> 
                      <h5 className="card-title">Profile Details</h5>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                <div className="col-lg-9 col-md-8">{admin.name}</div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Country</div>
                                <div className="col-lg-9 col-md-8">{admin.country}</div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Address</div>
                                <div className="col-lg-9 col-md-8">{admin.address}</div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Mobile</div>
                                <div className="col-lg-9 col-md-8">{admin.mobile}</div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Email</div>
                                <div className="col-lg-9 col-md-8">{admin.adminemail}</div>
                              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>

    </>
  )
}

export default Adminprofile