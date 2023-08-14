import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../../style/header.css'
import { useAuth } from '../context/auth'


const Header = () => {


    const navRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const brandname = document.querySelector('.navbar-brand');
        const navLinks = nav.querySelectorAll('.nav-item .nav-link');


        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-light', 'shadow');
                brandname.classList.add('navbar-brand-text-black');
                navLinks.forEach(link => link.classList.add('navbar-item-text'));
            } else {
                nav.classList.remove('bg-light', 'shadow', 'text-black');
                brandname.classList.remove('navbar-brand-text-black');
                navLinks.forEach(link => link.classList.remove('navbar-item-text'));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: null,
        })
        localStorage.removeItem('auth')
        alert('Logout SuccessFully...')
    }



    return (
        <>

            {/* Navbar */}
            <section className='navBarSet'>
                <nav ref={navRef} className="navbar fixed-top navbar-expand-lg navbar-dark p-nd-3 ">
                    <div className="container-fluid">
                        <a href="" className="navbar-brand">
                            {/* <h3 id='brandName'><span style={{ fontSize: 40 }} className='text-danger'>E</span>VENT<span style={{ fontSize: 40 }} className='text-danger'>P</span>LANNER<span style={{ fontSize: 50 }} className='text-danger'>X</span></h3> */}

                            <h3 id='brandName'><span className='text-danger logo'>E</span>VENT<span className='text-danger logo'>P</span>LANNER<span className='text-danger logo'>X</span></h3>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="mx-auto"></div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active  fw-bold fs-5" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active  fw-bold fs-5" to="/contact ">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active  fw-bold fs-5" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active  fw-bold fs-5" to="/service">Services</NavLink>
                                </li>
                                {/* <li class="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle fw-bold fs-5" to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </NavLink>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item fw-bold fs-5" to="/service/wedding">Wedding</NavLink></li>
                                        <li><NavLink className="dropdown-item fw-bold fs-5" to="/service/birthday">Birthday Party</NavLink></li>
                                        <li><NavLink className="dropdown-item fw-bold fs-5" to="/service/corporate">Corporate Event</NavLink></li>
                                        <li><NavLink className="dropdown-item fw-bold fs-5" to="/service/themeparty">Theme Party</NavLink></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link active fw-bold fs-5" to="/ourwork">Our Work</NavLink>
                                </li>

                                {
                                    auth?.user?.role === 1 ?
                                        (
                                            <>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link active fw-bold fs-5 text-bg-dark" to="/category">Category</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link active fw-bold fs-5" to="/event">Event</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link active fw-bold fs-5" to="/client-message">Message</NavLink>
                                                </li>
                                            </>
                                        ) : (
                                            <></>
                                        )
                                }

                                {
                                    !auth.user ? (
                                        <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link active fw-bold fs-5" to="/login">Login</NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink className="nav-link active fw-bold fs-5" to="/register">Register</NavLink>
                                            </li>


                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <NavLink
                                                    className="nav-link active fw-bold fs-5"
                                                    to="/login"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>

                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    )
}

export default Header
