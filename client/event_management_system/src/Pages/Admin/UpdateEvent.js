// import Layout from '../../Component/Layout/Layout';
import Layout_Second from '../../Component/Layout/Layout_Second';
import React, { useState, useEffect } from 'react'
import { Select } from "antd";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Component/context/auth';
import axios from 'axios';
import GoToTop from '../../Component/GoToTop';

const { Option } = Select;


const UpdateEvent = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [events, setEvents] = useState([]);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [auth, setAuth] = useAuth()


    //get single party
    const getSingleEvent = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/events/get-single-event/${params.eid}`)
            setCategory(data.event.category._id)
            setDescription(data.event.description)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleEvent();
        //eslint-disable-next-line
    }, [])


    //get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/categories`);
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
        // console.log(categories)
    }, []);



    //create event function
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(auth.token)
        try {
            const productData = new FormData();
            productData.append("description", description);
            photo && productData.append("photo", photo);
            productData.append("category", category);
            const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/events/update-event/${params.eid}`, productData, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM5ZWE0NDkyNmEwODE0OTZhODc1MDIiLCJpYXQiOjE2OTA5NjYwODUsImV4cCI6MTc3NzM2NjA4NX0.Tr8UgXulBKpRGV0XDK85livHQ2sBG7tyNpaXKkZMYQo",
                },
            })
            console.log("dataedit", data)
            if (data?.success) {
                alert("Event Created Successfully");
                navigate("/event");
            } else {
                alert(data?.message);
            }
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
    };


    //delete a product
    const handleDelete = async () => {
        try {
            let answer = window.prompt("Are You Sure want to delete this product ? ");
            if (!answer) return;
            const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/events/delete-event/${params.eid}`, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM5ZWE0NDkyNmEwODE0OTZhODc1MDIiLCJpYXQiOjE2OTA5NjYwODUsImV4cCI6MTc3NzM2NjA4NX0.Tr8UgXulBKpRGV0XDK85livHQ2sBG7tyNpaXKkZMYQo",
                },
            })
            alert("Event Deleted Succfully");
            navigate("/event");
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };


    return (
        <>
            <Layout_Second>
                <div className="container" style={{ marginTop: "150px" }}>
                    <div className="col-md-8">
                        <div className="" style={{ marginTop: "50px" }}>
                            <h1>Update Product</h1>
                            <div className="m-1 w-100">
                                {/* <Select
                                    bordered={false}
                                    placeholder="Select a category"
                                    size="large"
                                    showSearch
                                    className="form-select mb-3"
                                    onChange={(value) => {
                                        setCategory(value);
                                    }}
                                    value={category}
                                >
                                    {categories?.map((c) => (
                                        <Option key={c._id} value={c._id}>
                                            {c.name}
                                        </Option>
                                    ))}
                                </Select> */}

                                <select
                                    class="form-select mb-3"
                                    aria-label="Default select example"
                                    onChange={(value) => {
                                        setCategory(value);
                                    }}
                                    value={category}>
                                    <option selected>Select Category</option>
                                    {
                                        categories?.map((c) => (
                                            <>
                                                <option value={c._id} key={c._id}>{c.name}</option>
                                            </>
                                        ))
                                    }
                                </select>
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
                                    {photo ? (
                                        <div className="text-center">
                                            <img
                                                src={URL.createObjectURL(photo)}
                                                alt="product_photo"
                                                height={"200px"}
                                                className="img img-responsive"
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <img
                                                src={`${process.env.REACT_APP_API}/api/v1/events/get-event-photo/${params.eid}`}
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
                                    <button className="btn btn-primary" onClick={handleUpdate}>
                                        UPDATE
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-danger" onClick={handleDelete}>
                                        DELETE
                                    </button>
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

export default UpdateEvent