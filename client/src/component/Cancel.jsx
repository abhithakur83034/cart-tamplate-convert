import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Cancel = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="container">

          <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>Cancel</h1>
            <h2> Payment cancel</h2>
            <Link to="/" className="btn" >Back to home</Link>
            <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />

          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Cancel