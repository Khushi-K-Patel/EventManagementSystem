import React from 'react'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Header from './Header_second'

const Layout_Second = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <div style={{ minHeight: "70vh" }}>
                {children}
            </div>

            <Footer />

        </>
    )
}

Layout_Second.defaultProps = {
    title: 'Event Management System',
    description: 'Internship Project',
    keywords: 'mern, react, node, mongodb',
    author: 'Khushi'
}

export default Layout_Second