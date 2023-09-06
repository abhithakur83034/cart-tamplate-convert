import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
const Addproduct = () => {
    const { register, handleSubmit, reset } = useForm()


    const onSubmit = (data) => {

        console.log(data)
        const file = data.image[0];
        console.log(file)
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('quality', data.quality);
        formData.append('select', data.select);
        formData.append('quantity', data.quantity);

        const headers = {
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
        axios.post('http://localhost:4500/product/addproduct', formData, { headers })
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    reset()
                    toast.success(res.data.message)
                }
            }).catch((error) => {
                console.log(error)
                toast.error("unable to add product's")
            })
    }
    return (
        <>
            <main id="main" class="main">
                <div className="container " style={{ background: "rgba(192,192,192,0.3)" }} >
                    <div className="row ">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="d-flex justify-content-center py-4">
                                <Link to="#" className="logo d-flex align-items-center w-auto">
                                    <img src="assets/img/logo.png" alt="" />
                                    <span className="d-none d-lg-block">Next Cart.com</span>
                                </Link>
                            </div>
                            <div className="card  mb-3">
                                <div className="card-title text-center fs-4">
                                    add product's
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <p>
                                            <label htmlFor="">Product Image:</label><br></br>
                                            <input type="file" className='form-control' name='image' {...register('image', { required: true })} />
                                        </p>
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
                                            <input readOnly type="text" className='form-control' name='quantity' value="1"  {...register('quantity', { required: true })} />
                                        </p>
                                        <p>
                                            <label htmlFor="">Selece Role:</label><br></br>
                                            <select className='form-control' name='select' {...register('select', { required: true })}>
                                                {/* <option value="your role">Your Role</option> */}
                                                <option value="men">men's</option>
                                                <option value="women">women's</option>
                                                <option value="baby">baby's</option>
                                            </select>
                                        </p>
                                        <p>
                                            <input type="submit" className='form-control btn btn-info' value="submit" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
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

export default Addproduct