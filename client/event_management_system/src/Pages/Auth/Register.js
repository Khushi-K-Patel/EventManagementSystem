import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import img from '../../images/registerpage.avif'
import GoToTop from '../../Component/GoToTop';
import '../../style/login.css'

const Register = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hint, setHint] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                email,
                password,
                hint
            })

            console.log(res)
            console.log(res.data)
            console.log(res.data.success);
            console.log(res.data.message)

            if (res.data.success) {
                // console.log(res.data)
                navigate("/login");
                alert(res.data.message);

            }
            else {
                const message = res.data.message;
                alert(message)
            }

        } catch (error) {
            console.log(error)
            alert("Error in registration")
        }
    }

    return (
        <>
            <div className='container-fluid registerpage'>
                <div className='row p-5'>
                    <div className=' border-1 border border-secondary rounded'>
                        <div className='row'>
                            <p className="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                            <div className='col-md-10 registermarginX'>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4 mt-2">
                                        <i className="fas fa-envelope fa-lg  fa-fw" />
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
                                        <i className="fas fa-lock fa-lg fa-fw" />
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
                                        <i className="fa-solid fa-lightbulb fa-fw fa-lg"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder='Your Hint'
                                                value={hint}
                                                onChange={(e) => setHint(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0 ">
                                            <NavLink to="/login" className="text-righ">Already have an account?</NavLink>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="Submit" className="btn btn-primary btn-lg">Register</button>
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

export default Register