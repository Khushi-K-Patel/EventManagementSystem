import React, { useState } from 'react'
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Layout from '../Component/Layout/Layout'
import GoToTop from '../Component/GoToTop';

const Contactus = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/contact/contact`, {
                fname,
                lname,
                email,
                phone,
                message
            })

            console.log(res.data);
            if (res.data.success) {
                alert("Message sent successfully")
                setEmail("")
                setFname("")
                setLname("")
                setPhone("")
                setMessage("")
            }
            else {
                alert("Error in sending message")
            }


        } catch (error) {
            console.log(error);
            alert("Error in sending message")
        }
    }

    return (
        <Layout>
            {/* <div className="heading1 w-100  d-flex justify-content-center align-items-center">
                <div className="content text-center">
                    <h3 className='text-white'>
                        Get In Touch With Us
                    </h3>
                    <h1 className='text-white'>
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className='container'>
                <div className='row m-5'>
                    <h5 class="text-center w-responsive mx-auto mb-5 contact-heading">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</h5>
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    placeholder="First name" />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    placeholder="Last name" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div class="col">
                                <input
                                    type="email"
                                    className="form-control custom-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address" />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Contact No." />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <textarea
                                    name=""
                                    id=""
                                    cols="154"
                                    rows="1"
                                    className='custom-input'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Message'
                                >
                                </textarea>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='mt-4 p-3 border-none'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="container-fluid">
                <div style={{
                    position: 'relative', width: '100%', height: '50vh', overflow: 'hidden',
                    marginBottom: '2rem'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8886098845137!2d72.50323691496793!3d23.02786178495032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dbb9c740f19%3A0xc3a2cff09a8317d0!2sInfo%20Stans%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689597371301!5m2!1sen!2sin"
                        style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div> */}



            <div className='container-fluid banner-contact'>
                <div className='heading1'>
                    <h3>Get in touch with us</h3><br />
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <form onSubmit={handleSubmit}>
                            <div className='row me-2'>
                                <div className='col-md-6 mt-2'>
                                    <input type="text" className="form-control" placeholder="First Name"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <input type="text" className="form-control" placeholder="Last Name"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='row me-2 mt-2'>
                                <div className='col-md-6'>
                                    <input type="email" className="form-control" placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                </div>
                                <div className='col-md-6 mt-2'>
                                    <input type="text" className="form-control" placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='row ms1 me2 mt-2'>
                                <textarea rows={5} placeholder="Message" className="form-control " defaultValue={""}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">Send message</button>
                        </form>
                    </div>
                    <div className='col-md-5 mt-5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8886098845137!2d72.50323691496793!3d23.02786178495032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dbb9c740f19%3A0xc3a2cff09a8317d0!2sInfo%20Stans%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689597371301!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>

            <GoToTop />

        </Layout >
    )
}

export default Contactus





