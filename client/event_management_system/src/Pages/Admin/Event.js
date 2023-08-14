import React, { useState, useEffect } from 'react'
// import Layout from '../../Component/Layout/Layout'
import Layout_Second from '../../Component/Layout/Layout_Second';
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Component/context/auth';
import GoToTop from '../../Component/GoToTop';
const { Option } = Select;


const Event = () => {


    console.log("Error in front end")

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [events, setEvents] = useState([]);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [auth, setAuth] = useAuth()

    // console.log(auth.token)


    //get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/categories`);
            console.log("categorydata", data)
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong in getting catgeory");
        }
    };

    useEffect(() => {
        getAllCategory();
        // console.log(categories);
    }, []);

    console.log(category)


    //create event function
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            // console.log(auth.token)
            // console.log(auth.user.role)
            // console.log(auth)
            const productData = new FormData();
            productData.append("description", description);
            productData.append("photo", photo);
            productData.append("category", category);
            // console.log(productData)
            console.log(description)
            console.log("categpry", category)
            console.log(photo)
            console.log(productData)
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/events/create-events`, { description, photo, category }, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM5ZWE0NDkyNmEwODE0OTZhODc1MDIiLCJpYXQiOjE2OTA5NjYwODUsImV4cCI6MTc3NzM2NjA4NX0.Tr8UgXulBKpRGV0XDK85livHQ2sBG7tyNpaXKkZMYQo",
                    "Content-Type": "multipart/form-data",

                    // Authorization: `${auth.token}`,
                },
            })

            await console.log(data)
            if (data?.success) {
                alert("Product Created Successfully");
                navigate("/ourwork");
            } else {
                alert(data?.message);
            }
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
    };


    //get All Events
    const getAllEvent = async (e) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/events/get-event`);
            if (data?.success) {
                setEvents(data?.events)
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong in getting events");
        }
    }
    useEffect(() => {
        getAllEvent();
        console.log(events)
    }, []);

    console.log(categories)


    return (
        <>
            <Layout_Second>
                <div className="container" style={{ marginTop: "150px" }}>
                    <div className="col-md-8">
                        <div className="" style={{ marginTop: "50px" }}>
                            <h1>Create Event</h1>
                            <div className="m-1 w-100">
                                <form encType='multipart/form-data' onSubmit={handleCreate}>
                                    <Select
                                        // bordered={false}
                                        placeholder="Select a category"
                                        // size="large"
                                        // showSearch
                                        className="form-select mb-3"
                                        onChange={(value) => {
                                            setCategory(value);
                                        }}
                                    >
                                        {categories?.map((c) => (
                                            <Option key={c._id} value={c._id}>
                                                {c.name}
                                            </Option>
                                        ))}
                                    </Select>
                                    {/* <Select
                                        placeholder='Select a category'
                                        className='form-select mb-3'
                                        showSearch
                                        onChange={(value) => {
                                            setCategory(value)
                                        }}
                                    >
                                        {
                                            categories?.map((c) => (
                                                <>
                                                    <option value={c._id} key={c._id}
                                                    >{c.name}</option>
                                                </>
                                            ))
                                        }
                                    </Select> */}
                                    <div className="mb-3">
                                        <label className="btn btn-outline-secondary col-md-12">
                                            {photo ? photo.name : "Upload Photo"}
                                            <input
                                                type="file"
                                                name="photo"
                                                accept="image/*"
                                                onChange={(e) => setPhoto(e.target.files[0])}
                                                hidden
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        {photo && (
                                            <div className="text-center">
                                                <img
                                                    src={URL.createObjectURL(photo)}
                                                    alt="event_photo"
                                                    height={"200px"}
                                                    className="img img-responsive"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            type="text"
                                            value={description}
                                            placeholder="write a description"
                                            className="form-control"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary" type='submit'>
                                            CREATE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                {/* for view all the events */}
                <div className="container mt-5 mb-5">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">PhotoID</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                events?.map(e => (
                                    <>
                                        <tr>

                                            <td key={e._id}> {e.category.name}</td>
                                            <td key={e._id}> {e.description.substring(0, 300)}...</td>
                                            <td key={e._id}>
                                                <img src={`${process.env.REACT_APP_API}/api/v1/events/get-event-photo/${e._id}`} className='card-img-top' alt={e.name} />
                                            </td>

                                            <td>
                                                <button
                                                    className='btn btn-primary me-3'
                                                    onClick={() => {
                                                        navigate(`/event/update-delete/${e._id}`)
                                                    }}
                                                >
                                                    Edit/Delete
                                                </button>
                                            </td>
                                        </tr >
                                    </>
                                ))
                            }


                        </tbody>
                    </table>
                </div>

                <GoToTop />
            </Layout_Second>
        </>
    )
}

export default Event