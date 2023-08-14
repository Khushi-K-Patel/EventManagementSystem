import React, { useState, useEffect } from 'react'
// import Layout from '../../Component/Layout/Layout'
import Layout_Second from '../../Component/Layout/Layout_Second'
import axios from 'axios'
import { useAuth } from '../../Component/context/auth'
import CategoryForm from '../../Component/Form/CategoryForm'
import { Modal } from 'antd'
import GoToTop from '../../Component/GoToTop'

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [auth, setAuth] = useAuth();
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null)
    const [updatedName, setUpdatedName] = useState("")


    console.log("categoryAUth", auth.token)

    //handle forma
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, { name }, {
                headers: {
                    Authorization: `${auth.token}`,
                },
            })
            if (data?.success) {
                alert(`${name} is Created`)
                getAllCategory();
                setName("")
            }
            else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error)
            alert("Something went wrong in creating category")
        }
    }

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
    }, [])



    //update category
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`/api/v1/category/update-category/${selected._id}`, { name: updatedName }, {
                headers: {
                    Authorization: `${auth.token}`,
                },
            })
            console.log("data", data)
            if (data.success) {
                alert(`${updatedName} is updated`)
                setSelected(null)
                setUpdatedName("")
                setVisible(false)
                getAllCategory();
            }
            else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error)
            alert("Error in updating category")
        }
    }


    //delete category
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(`/api/v1/category/delete-category/${pId}`,
                {
                    headers: {
                        Authorization: `${auth.token}`,
                    },
                })
            if (data.success) {
                alert(`Category is deleted`)
                getAllCategory();
            }
            else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Somethig went wrong")
        }
    }


    return (
        <>
            <Layout_Second>
                <div
                    className="w-100  d-flex justify-content-center align-items-center"
                >

                </div>
                <div className="container" style={{ marginTop: "140px" }}>
                    <CategoryForm
                        handleSubmit={handleSubmit}
                        value={name}
                        setValue={setName}
                    />
                </div>

                <div className="container mt-5 mb-5">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                categories?.map(c => (
                                    <>
                                        <tr>

                                            <td key={c._id}> {c.name}</td>
                                            <td>
                                                <button
                                                    className='btn btn-primary me-3'
                                                    onClick={() => {
                                                        setVisible(true);
                                                        setUpdatedName(c.name)
                                                        setSelected(c);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={() => { handleDelete(c._id) }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr >
                                    </>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

                <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
                    <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}></CategoryForm>
                </Modal>

                <GoToTop />
            </Layout_Second>
        </>
    )
}

export default Category