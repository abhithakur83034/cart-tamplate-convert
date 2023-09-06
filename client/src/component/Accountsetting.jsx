import React from 'react'
import { Link } from 'react-router-dom'

const Accountsetting = () => {
  return (
    <>
   <main id="main" class="main">
    <h1>Account Settings</h1>
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

export default Accountsetting