import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Component/context/auth';
import GoToTop from '../../Component/GoToTop';
import '../../style/login.css'

const Login = () => {

    const [auth, setAuth] = useAuth()

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password
            })

            console.log(res.data.success)
            if (res.data.success) {
                // console.log(res.data)

                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data))

                alert("Login successfully");
                navigate('/');
            }
            else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
            alert("Error in login")
        }
    }

    return (
        <>
            <div className='container m-5 loginpage'>
                <div className='row'>
                    <div className=' border-1 border border-secondary rounded loginform w-100'>
                        <div className='row'>
                            <p className="text-center h1 fw-bold">Sign In</p>
                            <div className='col-md-10 loginf'>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4 mt-2">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder='Your Email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder='Your Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0 d-flex justify-content-around">
                                            <NavLink to="/register" className="text-righ">Create an account?</NavLink>
                                            <NavLink to="/resetpassword" className="text-left">Forgot Password</NavLink>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="Submit" className="btn btn-primary btn-lg w-50">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GoToTop />

        </>
    )
}

export default Login