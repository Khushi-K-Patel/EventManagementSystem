
import Layout from '../Component/Layout/Layout'
import '../style/home.css'
import { useAuth } from '../Component/context/auth'
import { useNavigate } from 'react-router';
import img from '../images/bbday4.jpg'
import img1 from '../images/haldi2.jpg'
import img2 from '../images/images (1).jpg'
import img3 from '../images/images.jpg'
import img4 from '../images/mandap.jpeg'
import img5 from '../images/Bbay.jpg'
import img6 from '../images/theme.jpg'
import img7 from '../images/green.webp'
import img8 from '../images/homepage1.jpg'
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import GoToTop from '../Component/GoToTop'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';

const HomePage = () => {

    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();

    const handlevenue = () => {
        navigate("/service/venue")
    }

    const hanldedecoration = () => {
        navigate("/service/decoration")
    }

    const handleservice = () => {
        alert("For more information contact us")
        navigate("/contact")
    }


    return (
        <>
            <Layout>
                <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                    <div className="content text-center">
                        <h1 className='text-white headinghome1'>
                            INDIA'S BEST EVENT MANAGEMENT COMPANY
                        </h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='row'>

                        <div className='col-md-6 mt-5'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IOG7vay801pAyUeIj5uxikCLxoY3LmRZ42QOPJX&s" alt="" className='imagehome' />
                        </div>
                        <div className='col-md-6'>
                            <h1 className='sub-heading'>EventPlannerX</h1>
                            <p className='text-justify'> Our Event Management System is designed to make the event planning process seamless, stress-free, and truly enjoyable. With a focus on personalization and attention to detail, we cater to a wide range of events, including weddings, corporate gatherings, birthday parties, and themed celebrations.</p>
                            <p className='text-justify'>
                                Our user-friendly platform empowers you to take charge of your event, providing easy-to-use tools for creating event pages, managing guest lists, and sending out invitations. Whether you have a specific vision in mind or need creative inspiration, our experienced event planners are here to guide you every step of the way. We believe that each event should reflect the unique style and personality of our clients, and with endless customization options, we bring your ideas to life with flawless execution.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <h1 className='text-center sub-heading'>Gallery</h1>


                    {
                        window.innerWidth < 1200 ? (
                            <Swiper
                                slidesPerView={1}
                                centeredSlides={true}
                                spaceBetween={30}
                                grabCursor={true}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={img} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img1} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img2} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img3} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img4} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img5} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img6} className="" style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img7} style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img8} style={{ width: "98%", height: "500px" }} />
                                </SwiperSlide>
                            </Swiper>
                        ) : (
                            <Swiper
                                slidesPerView={4}
                                centeredSlides={true}
                                spaceBetween={30}
                                grabCursor={true}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={img} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img1} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img2} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img3} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img4} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img5} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img6} className="imageswiper" style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img7} style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img8} style={{ width: "300px", height: "500px" }} />
                                </SwiperSlide>
                            </Swiper>
                        )
                    }



                </div>


                <div className="container-fluid ">
                    <h1 className='text-center sub-heading'>Our Services</h1>
                    <div className='row justify-content-center m-1'>
                        <div className="card text-white bg-primary m-3 col-md-4" onClick={handlevenue} >
                            <i className="fa-solid fa-location-dot center">
                            </i>
                            <div className="card-body m-3">
                                <h5 className="card-title text-center">Venue Select</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary m-3 col-md-4" onClick={handleservice} >
                            <i class="fa-solid fa-envelope center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Invitation card</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success m-3 col-md-4" onClick={handleservice} >
                            <i class="fa-solid fa-music center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Entertainment</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-danger m-3 col-md-4" onClick={handleservice} >
                            <i class="fa-solid fa-utensils center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Food And Drink</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-warning m-3 col-md-4" onClick={handleservice} >
                            <i class="fa-solid fa-photo-film center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Photo And Video</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-info m-3 col-md-4" onClick={hanldedecoration} >
                            <i class="fa-solid fa-cake-candles center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Decoration</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <GoToTop />
            </Layout>
        </>
    )
}

export default HomePage