import React, { useState, useEffect } from 'react'
import Layout_Second from '../Component/Layout/Layout_Second'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/detailwork.css'
import GoToTop from '../Component/GoToTop';

const DetailWork = () => {

    const [event, setEvent] = useState("");
    const params = useParams();

    console.log(params)

    const handleEvent = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/events/get-single-event/${params.eid}`)

            if (data?.success) {
                setEvent(data.event)
                console.log(data.event)
            }

        } catch (error) {
            console.log(error)
            alert("Error in fetching event details")
        }
    }
    useEffect(() => {
        handleEvent();
    }, [])

    return (
        <Layout_Second>
            <div className="container" style={{ marginTop: "150px", marginBottom: "30px" }} >



                <img
                    className='imgdetail card-img-top'
                    src={`${process.env.REACT_APP_API}/api/v1/events/get-event-photo/${params.eid}`}
                    style={{ width: '25rem', height: '20rem', float: 'left' }}
                    alt="eventphoto" />



                <p className="">{event.description}</p>


            </div>
            <GoToTop />
        </Layout_Second>
    )
}

export default DetailWork