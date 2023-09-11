import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from './Footer';

const Update = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { id } = useParams();
  const navigate = useNavigate()
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4500/product/update/${id}`)
      .then((res) => {
        setImg(res.data);
        const data = res.data;
        setValue('image', data.image);
        setValue('name', data.name);
        setValue('price', data.price);
        setValue('quality', data.quality);
        setValue('select', data.select);
        setValue('quantity', data.quantity);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const onSubmit = (data) => {

    const file = data.image[0];
    console.log(file)
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('quality', data.quality);
    formData.append('select', data.select);
    formData.append('quantity', data.quantity);

    console.log(formData)
    axios
      .put(`http://localhost:4500/product/update/${id}`, formData)
      .then((res) => {
        if (res.data) {
          reset();
          toast.success(res.data.message);
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to update product's");
      });
  };

  return (
    <>
      <main id="main" className="main">
        <div className="container " style={{ background: "rgba(192,192,192,0.3)" }}>
          <div className="row ">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="d-flex justify-content-center ">
                <Link to="#" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">Next Cart.com</span>
                </Link>
              </div>
              <div className="card  mb-3 mt-2">
                <div className="card-title text-center fs-4">
                  Update your product's
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                      <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">
                        <img
                          id="imagePreview"
                          src={`http://localhost:4500/img/${img.image}`}
                          height="100px"
                          alt="Profile"
                        />
                        <div className="pt-2">
                          <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            name="image"
                            {...register('image')}
                          />
                          <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                            <span role="img" aria-label="Upload">
                              📁
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <label htmlFor="">Product Name:</label><br></br>
                      <input type="text" className='form-control' name='name' placeholder='Add product name' {...register('name', { required: true })} />
                    </p>
                    <p>
                      <label htmlFor="">Product Price:</label><br></br>
                      <input type="number" className='form-control' name='price' placeholder='Add product price' {...register('price', { required: true })} />
                    </p>
                    <p>
                      <label htmlFor="">Product Quality:</label><br></br>
                      <input type="text" className='form-control' name='quality' placeholder='Add product quality' {...register('quality', { required: true })} />
                    </p>
                    <p>
                      <label htmlFor="">Product Quantity:</label><br></br>
                      <input readOnly type="text" className='form-control' name='quantity' value="1" {...register('quantity', { required: true })} />
                    </p>
                    <p>
                      <label htmlFor="">Select Role:</label><br></br>
                      <select className='form-control' name='select' {...register('select', { required: true })}>
                        <option value="men">men's</option>
                        <option value="women">women's</option>
                        <option value="baby">baby's</option>
                      </select>
                    </p>
                    <p>
                      <input type="submit" className='form-control btn btn-info' value="Update " />
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Update;
