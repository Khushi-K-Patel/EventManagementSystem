import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3" style={{ width: "50vh", marginLeft: "-10px" }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter New category'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginLeft: "-10px" }} >Submit</button>
            </form>
        </>
    )
}

export default CategoryForm