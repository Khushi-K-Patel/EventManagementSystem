import React from 'react'
import '../../style/footer.css'


const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-muted bg-light">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div className='footer-social-media'>
                        <a href className="me-4 text-reset">
                            <i className="fab fa-facebook-f icon" />
                        </a>
                        <a href className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href className="me-4 text-reset">
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section>
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <h6><span style={{ fontSize: 30 }}>E</span>VENT<span style={{ fontSize: 30 }}>P</span>LANNER<span style={{ fontSize: 40 }}>X</span></h6>
                                </h6>
                                <p className='text-justify'>
                                    EventPlannerX is a dynamic and innovative event management company that takes care of every detail to turn your special occasions into unforgettable experiences. Trust Event PlannerX to craft exceptional events that leave lasting impressions on your guests.
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful Link
                                </h6>
                                <p>
                                    <a href="/about" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="/contact" className="text-reset">Contact</a>
                                </p>
                                <p>
                                    <a href="/service" className="text-reset">Service</a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Services
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Wedding</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Birthday Party</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Corporate Event</a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div className="text-center p-4 copyright" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold copyright" href="https://mdbootstrap.com/">EventPlannerX.com</a>
                </div>
                {/* Copyright */}
            </footer>

        </>
    )
}

export default Footer