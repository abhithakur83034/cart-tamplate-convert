import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/index.css'
import '../style/mar.css'
import { useSelector } from "react-redux";
const Index = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        document.querySelector('body').classList.toggle('toggle-sidebar');
    };

    const logout = () => {
        localStorage.clear()
        navigate('/');
    }

    const userinfp = JSON.parse(localStorage.getItem('user'))
    // console.log(userinfp);
    const admininfp = JSON.parse(localStorage.getItem('admin'))
    // console.log(admininfp)
    const user = JSON.parse(localStorage.getItem('usertoken'))
    const admin = JSON.parse(localStorage.getItem('admintoken'))

// console.log(admin)

    // const [theme, setTheme] = useState('')

    // const toggleTheme = () => {
    //     theme === "dark-theme" ? setTheme('light-theme') : setTheme("dark-theme")
    // }

    // useEffect(() => {
    //     document.body.className = theme
    // }, [theme])





    
  const cartData = useSelector((state) => state.cartData);

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="index.html" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">Next Cart.com</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={handleClick}></i>
                </div>
                <div class="marquee-container">
                    <div class="marquee">
                        <span class="blink"> 🛍️ Shop the latest deals and discounts at Next Cart.com! Save up to 50% on electronics, fashion, home decor, and more. Don't miss out - shop now!📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢📢</span>
                    </div>
                </div>

                {
                    user ?
                        (
                            <>
                                <nav className="header-nav ms-auto">
                                    <ul className="d-flex align-items-center">
                                        <li className="nav-item dropdown pe-3">

                                            <Link to="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                                <img src={`http://localhost:4500/img/${userinfp.image}`} alt="Profile" className="rounded-circle" />
                                                <span className="d-none d-md-block dropdown-toggle ps-2">{userinfp.name}</span>
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                                <li className="dropdown-header">
                                                    <h6>{userinfp.name}</h6>
                                                    <span>{userinfp.mobile}</span>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                {
                                                    admin || user ?
                                                        (
                                                            <>
                                                                <li>
                                                                    <Link to="/profile/:id" className="dropdown-item d-flex align-items-center" >
                                                                        <i className="bi bi-person"></i>
                                                                        <span>My Profile</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <Link to="/accountsetting" className="dropdown-item d-flex align-items-center" >
                                                                        <i className="bi bi-gear"></i>
                                                                        <span>Account Settings</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <Link to="/needhelp" className="dropdown-item d-flex align-items-center" >
                                                                        <i className="bi bi-question-circle"></i>
                                                                        <span>Need Help?</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <p className="stl dropdown-item d-flex align-items-center " style={{ cursor: "pointer" }} onClick={() => { logout() }}>
                                                                        <i className="bi bi-box-arrow-right"></i>
                                                                        <span  >LogOut</span>
                                                                    </p>
                                                                </li>
                                                            </>
                                                        )
                                                        :
                                                        ""
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </>
                        )
                        :
                        ""}



                {
                    admin ?
                        (
                            <>
                                <nav className="header-nav ms-auto">
                                    <ul className="d-flex align-items-center">
                                        <li className="nav-item dropdown pe-3">

                                            <Link to="#" className="nav-link nav-profile d-flex align-items-center " data-bs-toggle="dropdown">
                                                <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                                <span className="d-none d-md-block dropdown-toggle ps-2">{admininfp.name}</span>
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                                <li className="dropdown-header">
                                                    <h6>{admininfp.name}</h6>
                                                    <span>{admininfp.mobile}</span>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                {
                                                    admin || user ?
                                                        (
                                                            <>
                                                               {
                                                                user ?
                                                                <li>
                                                                <Link to="/profile" className="dropdown-item d-flex align-items-center" >
                                                                    <i className="bi bi-person"></i>
                                                                    <span>My Profile</span>
                                                                </Link>
                                                            </li>
                                                            :
                                                            <li>
                                                            <Link to="/profile" className="dropdown-item d-flex align-items-center" >
                                                                <i className="bi bi-person"></i>
                                                                <span>My Profile</span>
                                                            </Link>
                                                        </li>
                                                               }
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <Link to="/accountsetting" className="dropdown-item d-flex align-items-center" >
                                                                        <i className="bi bi-gear"></i>
                                                                        <span>Account Settings</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <Link to="/chatapp" className="dropdown-item d-flex align-items-center" >
                                                                        <i className="bi bi-question-circle"></i>
                                                                        <span>Need Help?</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr className="dropdown-divider" />
                                                                </li>
                                                                <li>
                                                                    <p className="stl dropdown-item d-flex align-items-center " style={{ cursor: "pointer" }} onClick={() => { logout() }}>
                                                                        <i className="bi bi-box-arrow-right"></i>
                                                                        <span  >LogOut</span>
                                                                    </p>
                                                                </li>
                                                            </>
                                                        )
                                                        :
                                                        ""
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </>
                        )
                        :
                        ""}

            </header>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link collapsed" >
                            <i className="bi bi-card-list"></i>
                            <span>Home</span>
                        </Link>
                    </li>


                    {
                        admin || user ?
                            (
                                <>
                                    
                                    {
                                        admin ?
                                            <li className="nav-item">
                                                <Link to="/addproducts" className="nav-link collapsed" >
                                                    <i className="bi bi-card-list"></i>
                                                    <span>Add Product's</span>
                                                </Link>
                                            </li>
                                            :
                                            ""
                                    }
                                    {
                                        cartData.length !== 0 ?
                                        <li className="nav-item">
                                        <Link to="/cart" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Cart <b style={{ color: "red" }}>{cartData.length}</b> </span>
                                        </Link>
                                    </li>
                                    :
                                    ""
                                    }
                                    <li className="nav-item">
                                        <Link to="/mens" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Men's</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/womens" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Women's</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/babys" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Baby's</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/faq" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>FAQ</span> </Link>
                                    </li>

                                  {
                                    user ?
                                    <li className="nav-item">
                                    <Link to="/profile/:id" className="nav-link collapsed" >
                                        <i className="bi bi-card-list"></i>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                :
                                <li className="nav-item">
                                <Link to="/profile" className="nav-link collapsed" >
                                    <i className="bi bi-card-list"></i>
                                    <span>Profile</span>
                                </Link>
                            </li>
                                  }
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>About us</span>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                    {/* <button className="nav-link collapsed" onClick={toggleTheme}>
                                        <i className="bi bi-card-list"></i>
                                        <span>Toggle Theme</span>
                                    </button> */}



                                    <li className="nav-item">
                                        <Link to="/feedback" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Feedback</span>
                                        </Link>
                                    </li>


                                    {
                                        admin ?

                                            <li className="nav-item">
                                                <Link to="/showfeedback" className="nav-link collapsed" >
                                                    <i className="bi bi-card-list"></i>
                                                    <span>Show Feedback</span>
                                                </Link>
                                            </li>
                                            :
                                            <li className="nav-item">
                                                <Link to="/adminprofile" className="nav-link collapsed" >
                                                    <i className="bi bi-card-list"></i>
                                                    <span>Admin Profile</span>
                                                </Link>
                                            </li>
                                    }
                                </>
                            )
                            :
                            (
                                <>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link collapsed" >
                                            <i className="bi bi-card-list"></i>
                                            <span>Register</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link collapsed" >
                                            <i className="bi bi-box-arrow-in-right"></i>
                                            <span>Login</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin" className="nav-link collapsed" >
                                            <i className="bi bi-box-arrow-in-right"></i>
                                            <span>Admin</span>
                                        </Link>
                                    </li>
                                </>
                            )
                    }
                    {
                        admin ?
                            <li className="nav-item">
                                <Link to="/admintable" className="nav-link collapsed" >
                                    <i className="bi bi-card-list"></i>
                                    <span>Registered User's</span> </Link>
                            </li>
                            :
                            ""
                    }
                </ul>
            </aside>

        </>
    )
}

export default Index
