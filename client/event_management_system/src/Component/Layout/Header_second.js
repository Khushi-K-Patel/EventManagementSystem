import React, { useEffect, useRef } from 'react'
import { useAuth } from '../context/auth'
import { NavLink } from 'react-router-dom'
import '../../style/header_second.css'

const Header_second = () => {

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
            <nav className="navbar navbar-expand-lg bg-light fixed-top ">
                <div className="container">
                    <NavLink className="navbar-brand" to="#">
                        <h3 id='brandName'><span style={{ fontSize: 40 }} className='text-danger'>E</span>VENT<span style={{ fontSize: 40 }} className='text-danger'>P</span>LANNER<span style={{ fontSize: 50 }} className='text-danger'>X</span></h3>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                                <NavLink className="nav-link active fw-bold fs-5" to="/category">Category</NavLink>
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
            </nav >


        </>
    )
}

export default Header_second