import React, { useEffect, useState } from 'react'
// import Layout from '../../Component/Layout/Layout'
import Layout_Second from '../../Component/Layout/Layout_Second';
import axios from 'axios';
import { useAuth } from '../../Component/context/auth';
import GoToTop from '../../Component/GoToTop';

const ClientMessage = () => {

    const [message, setMessage] = useState([]);
    const [auth, setAuth] = useAuth("");

    console.log(auth.token)
    console.log("Authclient", auth.token)
    const token = auth.token
    console.log("Token", token)

    const tk = auth.token
    console.log("Tk", tk)
    // return

    const handleMessage = async () => {
        try {
            console.log("hiii")
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/contact/getContactInfo`, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM5ZWE0NDkyNmEwODE0OTZhODc1MDIiLCJpYXQiOjE2OTA5NTU1MjYsImV4cCI6MTc3NzM1NTUyNn0.E2AawNAeoN88geFds5-GA3nhr-eERABK16wJkdZCfmM"
                }
            })

            console.log("data", data)
            console.log("datasuccessclient message", data?.success)
            console.log("dataconntact", data.contact)
            if (data?.success) {
                setMessage(data.contact)
            }
        } catch (error) {
            console.log(error)
            alert("Error in handling client message")
        }
    }

    useEffect(() => {
        handleMessage()
    }, [])


    return (
        <>
            <Layout_Second>
                <div className="container mb-5" style={{ marginTop: "150px" }}>
                    <h1 className='text-center'>Clients Message</h1>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Fname</th>
                                <th scope="col">Lname</th>
                                <th scope="col">email</th>
                                <th scope="col">contact</th>
                                <th scope="col">message</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                message?.map(e => (
                                    <>
                                        <tr>
                                            <td key={e._id}> {e.fname}</td>
                                            <td key={e._id}> {e.lname}</td>
                                            <td key={e._id}> {e.email}</td>
                                            <td key={e._id}> {e.phone}</td>
                                            <td key={e._id}> {e.message}</td>

                                        </tr >
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <GoToTop />
            </Layout_Second >
        </>
    )
}

export default ClientMessage