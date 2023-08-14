
// import '../../style/resetpassword.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import GoToTop from '../../Component/GoToTop'
import { NavLink } from 'react-router-dom'


const ResetPassword = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("");
    const [hint, setHint] = useState("")
    const navigate = useNavigate();


    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
                email,
                newPassword,
                hint,
            })

            if (res.data.success) {
                alert("Password reset Successfully")
                navigate("/login")
            }
            else {
                // alert("Error in reset password")
                // alert(res.data.message)
                navigate("/resetpassword")
            }


        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>

            <div className='container-fluid registerpage'>
                <div className='row pt-5'>
                    <div className=' border-1 border border-secondary rounded w-100'>
                        <div className='row'>
                            <p className="text-center h1 fw-bold mb-5 mt-4">Reset Password</p>
                            <div className='col-md-10 mt-5 registermarginX'>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4 mt-2">
                                        <i className="fas fa-envelope fa-lg fa-fw" />
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
                                        <i className="fa-solid fa-lightbulb fa-fw fa-lg"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Your Hint'
                                                value={hint}
                                                onChange={(e) => setHint(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg  fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder='Your Password'
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="d-flex flex-row align-items-center mb-4">
                                        <div className="form-outline flex-fill mb-0 d-flex justify-content-around">
                                            <NavLink to="/register" className="text-righ">Create an account?</NavLink>
                                            <NavLink to="/forgot-password" className="text-left">Forgot Password</NavLink>
                                        </div>
                                    </div> */}

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

export default ResetPassword