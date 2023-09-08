import React from 'react'
// import Index from './Index'
import '../style/about.css'
import Footer from './Footer'
const About = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="container" style={{background:"rgba(192,192,192,0.3)"}}>
          <div className="row">
            <div className="col-sm-12">
              <div className="container">
                <h2>Our Story</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                  Suspendisse potenti. Cras in lorem vel libero consequat suscipit.
                </p>

                <h2>Our Mission</h2>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Sed viverra nisl vel diam efficitur, non venenatis urna laoreet.
                </p>

                <h2>Our Team</h2>
                <p>
                  Meet the dedicated individuals who make our organization successful.
                </p>

                <ul>
                  <li>John Doe - CEO</li>
                  <li>Jane Smith - CTO</li>
                  <li>Alice Johnson - COO</li>
                </ul>

                <h2>Our Values</h2>
                <p>
                  At our core, we believe in the following values that guide our actions and decisions:
                </p>

                <ul>
                  <li>Customer Satisfaction</li>
                  <li>Innovation and Creativity</li>
                  <li>Integrity and Transparency</li>
                  <li>Teamwork and Collaboration</li>
                  <li>Continuous Learning and Improvement</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions or would like to get in touch with us, please feel free to contact
                   us at <a href="mailto:info@example.com">info@example.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
     <Footer/>

    </>
  )
}

export default About