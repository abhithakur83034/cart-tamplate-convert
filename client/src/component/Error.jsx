import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Error = () => {
    return (
        <>
            <main>
                <div className="container">

                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <Link to="/" className="btn" >Back to home</Link>
                        <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />

                    </section>

                </div>
            </main>
            <Footer/>

        </>
    )
}

export default Error