import React from 'react'
import Layout_Second from '../Component/Layout/Layout_Second'
import { Link } from "react-router-dom";
import '../style/pnf.css'
import GoToTop from '../Component/GoToTop';

const PagenotFound = () => {
    return (
        <Layout_Second>
            <div className="section">
                <div className="pnf">
                    <h1 className="pnf-title">404</h1>
                    <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                    <Link to="/" className="pnf-btn">
                        Go Back
                    </Link>
                </div>
            </div>
            <GoToTop />
        </Layout_Second>
    )
}

export default PagenotFound