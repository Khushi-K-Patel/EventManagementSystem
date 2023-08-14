import React from 'react'
import '../style/about.css'
import { useNavigate } from 'react-router-dom'
import Layout from '../Component/Layout/Layout';
import GoToTop from '../Component/GoToTop';

const About = () => {

    const navigate = useNavigate();

    const myfunction = () => {
        navigate('/contact')
    }

    return (
        <>
            <Layout>

                <div className='container-fluid banner'>
                    <div className='heading'>
                        <h1>About us</h1>
                    </div>
                </div>

                <section className='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='content'>
                                    <p>Our event management company stands out as an industry leader, backed by a remarkable track record. With years of experience, we have perfected our skills, ensuring flawless execution. Passionate and creative, our dedicated professionals are committed to making your vision a reality. We take the time to understand your unique event goals and work tirelessly to bring them to life.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='content'>
                                    <p>  Our team's problem-solving expertise enables us to tackle any challenges that may arise, ensuring seamless event operations. Entrusting your event to us means choosing a partner dedicated to surpassing your expectations. With our expertise and passion, we promise a memorable and stress-free event that leaves a lasting impression on both you and your attendees.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wpb_wrapper">
                        <div className="text-center">
                            <h2 className="ui-title-block ui-title-block_weight_normal"> We Create Events  That Lasts </h2>
                            <div className="ui-subtitle-block container">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs &amp; budget.</div>
                        </div></div>

                    <section className='description'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-3 column-about'>
                                    <div class="card mt-5" style={{ width: "18rem" }}>
                                        <img src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/5-2.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Our Vision</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 column-about'>
                                    <div class="card mt-5" style={{ width: "18rem" }}>
                                        <img src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/6-2.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Our Approach</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 column-about'>
                                    <div class="card mt-5" style={{ width: "18rem" }}>
                                        <img src="https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/7-2.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Our goals </h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </section>
                <GoToTop />

            </Layout>

        </>
    )
}

export default About