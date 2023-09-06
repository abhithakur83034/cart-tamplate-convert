import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
const Admintable = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:4500/user/alluser")
      .then((res) => {
        setData(res.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  const handleDelete = (_id) => {
    axios.delete('http://localhost:4500/user/delete/' + _id)
      .then((res) => {
        toast.success('delete')
      setTimeout(()=>{
        navigate(0)
      },3000)
      }).catch((error) => {
        toast.error(error)
      })
  }
  return (
    <>
      {/* <Index /> */}
      <main id="main" className="main">
        <section className="section" style={{background:"rgba(192,192,192,0.3)"}}>
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Datatables</h5>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((item, index) => (
                          <tr key={index}>
                            <td> {index + 1} </td>
                            <td>{item.name}</td>
                            <td> {item.mobile}</td>
                            <td> {item.email}</td>
                            <td>
                              <button className='btn btn-danger' onClick={() => {handleDelete(item._id)}}>Delete</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
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

export default Admintable