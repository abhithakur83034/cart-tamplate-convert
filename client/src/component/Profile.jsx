import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';

const Profile = () => {
 const {id} = useParams();

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user);
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(admin)


  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const file = data.image[0];
    console.log(file.name)
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', data.name);
    formData.append('mobile', data.mobile);
    formData.append('email', data.email);
    formData.append('address', data.address);
    formData.append('country', data.country);
    formData.append('about', data.about);


    axios.post(`http://localhost:4500/profile/updateprofile/${id}`,formData)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('user',JSON.stringify(res.data))
        toast.success("user data updated successfully")
      }).catch((error) => {
        console.log(error.response.data)
        toast.error(error.response.data)
      })
  }



  const handleEdit = (id) => {
  navigate(`/profile/${id}`)
  }


  return (
    <>
      <main id="main" className="main">
        {/* <Index /> */}
        <section className="section profile">
          <div className="row">
            {
              admin ?
                (
                  <>
                    <div className="col-xl-4">

                      <div className="card">
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                          <img src={`http://localhost:4500/img/${user.image}`} alt="Profile" className="rounded-circle" />
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
                  </>
                )
                :
                (
                  <>
                    <div className="col-xl-4">

                      <div className="card">
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                          <img src={`http://localhost:4500/img/${user.image}`} alt="Profile" className="rounded-circle" />
                          <h2>{user.name}</h2>
                          <h3>{user.email}</h3>
                          <div className="social-links mt-2">
                            <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                            <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                            <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                            <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </>
                )
            }


            <div className="col-xl-8">

              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">

                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit" onClick={() => handleEdit(user._id) }>Edit Profile</button>
                    </li>



                  </ul>
                  <div className="tab-content pt-2">

                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title">About</h5>
                      {
                        admin ? <p className="small fst-italic">{admin.about}  </p> : <p className="small fst-italic"> {user.about} </p>
                      }

                      <h5 className="card-title">Profile Details</h5>

                      {
                        admin ?
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                <div className="col-lg-9 col-md-8">{admin.name}</div>
                              </div>
                            </>
                          )
                          :
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                <div className="col-lg-9 col-md-8">{user.name}</div>
                              </div>
                            </>
                          )
                      }



                      {
                        admin ?
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Country</div>
                                <div className="col-lg-9 col-md-8">{admin.country}</div>
                              </div>
                            </>
                          )
                          :
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Country</div>
                                <div className="col-lg-9 col-md-8">{user.country}</div>
                              </div>
                            </>
                          )
                      }




                      {
                        admin ?
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Address</div>
                                <div className="col-lg-9 col-md-8">{admin.address}</div>
                              </div>
                            </>
                          )
                          :
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Address</div>
                                <div className="col-lg-9 col-md-8">{user.address}</div>
                              </div>
                            </>
                          )
                      }





                      {
                        admin ?
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Mobile</div>
                                <div className="col-lg-9 col-md-8">{admin.mobile}</div>
                              </div>
                            </>
                          )
                          :
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Mobile</div>
                                <div className="col-lg-9 col-md-8">{user.mobile}</div>
                              </div>
                            </>
                          )
                      }







                      {
                        admin ?
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Email</div>
                                <div className="col-lg-9 col-md-8">{admin.adminemail}</div>
                              </div>
                            </>
                          )
                          :
                          (
                            <>
                              <div className="row">
                                <div className="col-lg-3 col-md-4 label ">Email</div>
                                <div className="col-lg-9 col-md-8">{user.email}</div>
                              </div>
                            </>
                          )
                      }

                    </div>

                    {
                      admin ? 
                      "" 
                      :
                        (
                          <>
                            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mb-3">
                                  <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                  <div className="col-md-8 col-lg-9">
                                    <img src={`http://localhost:4500/img/${user.image}`} alt="Profile" />
                                    <div className="pt-2">
                                      {/* <input type="file" className="bi bi-upload" /> */}
                                      <label for="file">
                                        <i className="bi bi-upload" style={{cursor:"pointer"}}></i>
                                        <input type="file" id="file"  style={{display:"none"}} name="image"  {...register("image")} />
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                  <div className="col-md-8 col-lg-9">
                                    <input name="fullName" type="text" className="form-control" id="fullName" defaultValue={user.name} {...register("name")} />
                                  </div>
                                </div>

                                {
                                  admin ?
                                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                      <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row mb-3">
                                          <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                          <div className="col-md-8 col-lg-9">
                                            <img src={`http://localhost:4500/img/${user.image}`} alt="Profile" />
                                            <div className="pt-2">
                                              <Link to="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></Link>
                                              <Link to="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></Link>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="row mb-3">
                                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                          <div className="col-md-8 col-lg-9">
                                            <input name="fullName" type="text" className="form-control" id="fullName" placeholder={admin.name} {...register("name")} />
                                          </div>
                                        </div>

                                        {
                                          admin ?
                                            ""
                                            :
                                            <div className="row mb-3">
                                              <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                                              <div className="col-md-8 col-lg-9">
                                                <textarea name="about" className="form-control" id="about" style={{ height: "100px" }} {...register("about")}>{admin.about}</textarea>
                                              </div>
                                            </div>
                                        }



                                        <div className="row mb-3">
                                          <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                                          <div className="col-md-8 col-lg-9">
                                            <input name="country" type="text" className="form-control" id="Country" defaultValue={admin.country} {...register("country")} />
                                          </div>
                                        </div>

                                        <div className="row mb-3">
                                          <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                          <div className="col-md-8 col-lg-9">
                                            <input name="address" type="text" className="form-control" id="Address" defaultValue={admin.address} {...register("address")} />
                                          </div>
                                        </div>

                                        <div className="row mb-3">
                                          <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                          <div className="col-md-8 col-lg-9">
                                            <input name="mobile" type="text" className="form-control" id="mobile" defaultValue={admin.mobile} {...register("mobile")} />
                                          </div>
                                        </div>

                                        <div className="row mb-3">
                                          <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                          <div className="col-md-8 col-lg-9">
                                            <input name="email" type="email" className="form-control" id="Email" defaultValue={admin.email} {...register("email")} />
                                          </div>
                                        </div>


                                        <div className="text-center">
                                          <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                      </form>

                                    </div>
                                    :
                                    <div className="row mb-3">
                                      <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                                      <div className="col-md-8 col-lg-9">
                                        <textarea name="about" className="form-control" id="about" style={{ height: "100px" }} {...register("about")}>{user.about}</textarea>
                                      </div>
                                    </div>
                                }



                                <div className="row mb-3">
                                  <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                                  <div className="col-md-8 col-lg-9">
                                    <input name="country" type="text" className="form-control" id="Country"  defaultValue={user.country} {...register("country")} />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                  <div className="col-md-8 col-lg-9">
                                    <input name="address" type="text" className="form-control" id="Address" defaultValue={user.address} {...register("address")} />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                  <div className="col-md-8 col-lg-9">
                                    <input name="mobile" type="text" className="form-control" id="mobile" defaultValue={user.mobile} {...register("mobile")} />
                                  </div>
                                </div>

                                <div className="row mb-3">
                                  <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                  <div className="col-md-8 col-lg-9">
                                    <input name="email" type="email" className="form-control" id="Email" defaultValue={user.email} {...register("email")} />
                                  </div>
                                </div>


                                <div className="text-center">
                                  <button type="submit" className="btn btn-primary">Save Changes</button>
                                </div>
                              </form>

                            </div>
                          </>
                        )
                    }


                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

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

export default Profile