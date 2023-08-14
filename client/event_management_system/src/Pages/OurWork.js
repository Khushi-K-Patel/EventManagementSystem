import React, { useState, useEffect } from 'react'
// import Layout from '../Component/Layout/Layout'
import Layout_Second from '../Component/Layout/Layout_Second';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
import "../style/ourwork.css"
import GoToTop from '../Component/GoToTop';
const OurWork = () => {

    const [events, setEvents] = useState([]);

    //get all events
    const getAllEvents = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/events/get-event`)
            setEvents(data.events);
        } catch (error) {
            console.log(error);
            alert('something went Worng')
        }
    }

    //lifecycle method
    useEffect(() => {
        getAllEvents();
    }, [])

    return (
        <>
            <Layout_Second>
                <div className="container" style={{ marginTop: "130px" }}>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="" style={{ marginTop: "50px" }}>
                                <h1 className='text-center heading2 mb-4'>OUR WORK</h1>
                                <div className="d-flex justify-content-evenly flex-wrap mb-5 ourwork">
                                    {
                                        events?.map((p) => (
                                            <Link key={p._id} to={`/ourwork/${p._id}`} className='product-link text-decoration-none'>

                                                <div
                                                    className="card h-100 w-100 mt-5 ourwork "
                                                    key={p._id}
                                                    style={{ width: '18rem', height: "90px" }}>
                                                    <img src={`${process.env.REACT_APP_API}/api/v1/events/get-event-photo/${p._id}`} style={{ width: '17rem', height: '17rem' }} className='card-img-top m-2' alt={p.name} />
                                                    <div className="card-body">
                                                        <h5 className="card-title text-dark text-center">{p.category.name}</h5>
                                                        <p className="card-text ourworkpara text-dark" style={{ height: '6rem', width: '16rem' }}>{p.description.substring(0, 100)}...</p>
                                                        <button
                                                            class="btn btn-primary mt-3"
                                                            type="submit"
                                                            onClick={() => { }}
                                                        >
                                                            Read More...
                                                        </button>
                                                    </div>
                                                </div>
                                            </Link>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GoToTop />
            </Layout_Second>
        </>
    )
}

export default OurWork

//<div className="d-flex flex-wrap justify-content-center">