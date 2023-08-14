import React from 'react'
import Layout from './../Component/Layout/Layout';
import '../style/service.css'
import img from '../images/haldi3.jpg'
import img2 from '../images/mandap.jpeg'
import { useNavigate } from 'react-router-dom';
import GoToTop from '../Component/GoToTop';


const Service = () => {

    const navigate = useNavigate()

    const handlevenue = () => {
        navigate('/service/venue')
    }

    const handleDecoration = () => {
        navigate('/service/decoration')
    }

    const handleClick = () => {
        alert('For more information contact us')
        navigate('/contact')
    }

    return (
        <>
            {/* <Layout>
                <div className="banner-service w-100 vh-100 d-flex justify-content-center align-items-center">
                    <div className="content text-center">
                        <h1 className='text-white'>
                            WE PLAN THE BEST EVENT
                        </h1>
                    </div>
                </div>

                <div className='container mt-5'>
                    <p className='text-center f-s'>Welcome to our Event Management System service page, where we take pride in creating extraordinary experiences for every occasion. Our venue image gallery showcases the finest selection of breathtaking locations, perfect for your event's unique needs. With our decoration image gallery featuring five diverse styles, we offer a plethora of creative options to transform any space into a dream setting. Explore our specialized services for weddings, corporate events, birthday parties, and themed celebrations, each curated with meticulous attention to detail and personalized touches that will leave a lasting impression on your guests. Let us bring your vision to life and make your event an unforgettable masterpiece.</p>
                </div>
                <div className='container-fluid mt-2'>

                    <div className='row mt-5'>
                        <h1>Venue</h1>
                        <div className='col-md-5 column' style={{ marginTop: "2px" }}>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://destinationweddingzplanner.com/images/Venue_1.png" alt="Card image cap"></img>
                            </div>
                        </div>
                        <div className='col-md-5 column' style={{ marginTop: "2px" }}>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://destinationweddingzplanner.com/images/Venue_2.png" alt="Card image cap"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-5'>
                    <div className='row column1'>
                        <h1 className='pt-5 '>Decor & Designing</h1>
                        <div className='col-md-3 column1'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src={img} alt="Card image cap" height={300} width={500}></img>
                            </div>
                        </div>
                        <div className='col-md-3 ms4'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxwHq9yEaYZPCFrBlEDQoNo48l29ckeyRVQ&usqp=CAU" alt="Card image cap" height={300} width={500}></img>
                            </div>
                        </div>
                        <div className='col-md-3 ms4'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src={img2} alt="Card image cap" height={300} width={500}></img>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2 column1'>
                        <div className='col-md-3 column1 ms5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://media.radissonhotels.net/image/radisson-blu-hotel-ahmedabad/meeting-room/16256-116508-f79467524_3xl.jpg" alt="Card image cap" height={300} width={500}></img>
                            </div>
                        </div>
                        <div className='col-md-3 ms4'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://deowgxgt4vwfe.cloudfront.net/uploads/1681995995_small.jpg" alt="Card image cap" height={300} width={500}></img>
                            </div>
                        </div>
                        <div className='col-md-3 ms4'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wRVlD_wvvbRTLcJaRxrsZJDmdCWr-sn5pA&usqp=CAU" alt="Card image cap" height={300} width={500}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ">
                    <h1 className='text-center mt-5 pt-5'>Our Services</h1>
                    <div className='row justify-content-center mt-5'>
                        <div className="card text-white bg-primary m-3 col-md-4" style={{ maxWidth: '17rem' }}
                            onClick={handlevenue}
                        >
                            <i className="fa-solid fa-location-dot center">
                            </i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Venue Select</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleClick}>
                            <i class="fa-solid fa-envelope center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Invitation card</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success m-3 col-md-4" style={{ maxWidth: '18rem' }}
                            onClick={handleClick}
                        >
                            <i class="fa-solid fa-music center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Entertainment</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="card text-white bg-danger m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleClick}>
                            <i class="fa-solid fa-utensils center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Food And Drink</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-warning m-3 col-md-4" style={{ maxWidth: '18rem' }}
                            onClick={handleDecoration}
                        >
                            <i class="fa-solid fa-photo-film center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Decoration</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout > */}
            <Layout>

                <div className='container-fluid banner-service'>
                    <div className='headingservices'>
                        <h1>We Plan The Best Events</h1>
                    </div>
                </div>

                <div className='container mt-5'>
                    <p className='text-center f-s'>Welcome to our Event Management System service page, where we take pride in creating extraordinary experiences for every occasion. Our venue image gallery showcases the finest selection of breathtaking locations, perfect for your event's unique needs. With our decoration image gallery featuring five diverse styles, we offer a plethora of creative options to transform any space into a dream setting. Explore our specialized services for weddings, corporate events, birthday parties, and themed celebrations, each curated with meticulous attention to detail and personalized touches that will leave a lasting impression on your guests. Let us bring your vision to life and make your event an unforgettable masterpiece.</p>
                </div>
                <div className='container-fluid mt-2'>

                    <div className='row mt-5'>
                        <h1>Venue</h1>
                        <div className='col-md-5 column'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://destinationweddingzplanner.com/images/Venue_1.png" alt="Card image cap"></img>
                            </div>
                        </div>
                        <div className='col-md-5 column'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://destinationweddingzplanner.com/images/Venue_2.png" alt="Card image cap" ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row column1 mt-3'>
                        <h1 className=' mt-5 mb-5'>Decor & Designing</h1>
                        <div className='col-md-3  mt-5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src={img} alt="Card image cap" height={270}></img>
                            </div>
                        </div>
                        <div className='col-md-3  mt-5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxwHq9yEaYZPCFrBlEDQoNo48l29ckeyRVQ&usqp=CAU" height={270} alt="Card image cap"></img>
                            </div>
                        </div>
                        <div className='col-md-3  mt-5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src={img2} alt="Card image cap" height={270}></img>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2 column1'>
                        <div className='col-md-3  mt-5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://media.radissonhotels.net/image/radisson-blu-hotel-ahmedabad/meeting-room/16256-116508-f79467524_3xl.jpg" alt="Card image cap" height={270}></img>
                            </div>
                        </div>
                        <div className='col-md-3  mt-5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://deowgxgt4vwfe.cloudfront.net/uploads/1681995995_small.jpg" alt="Card image cap" height={270}></img>
                            </div>
                        </div>
                        <div className='col-md-3  mt-5'>
                            <div class="card" style={{ width: "100%" }}>
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wRVlD_wvvbRTLcJaRxrsZJDmdCWr-sn5pA&usqp=CAU" alt="Card image cap" height={270}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ">
                    <h1 className='text-center mt-5'>Our Services</h1>
                    <div className='row justify-content-center mt-5'>
                        <div className="card text-white bg-primary m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handlevenue}>
                            <i className="fa-solid fa-location-dot center">
                            </i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Venue Select</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleClick}>
                            <i class="fa-solid fa-envelope center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Invitation card</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleClick}>
                            <i class="fa-solid fa-music center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Entertainment</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-danger m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleClick}>
                            <i class="fa-solid fa-utensils center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center">Food And Drink</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-warning m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleDecoration}>
                            <i class="fa-solid fa-photo-film center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center " >Decoration</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <div className="card text-white bg-warning m-3 col-md-4" style={{ maxWidth: '18rem' }} onClick={handleClick}>
                            <i class="fa-solid fa-photo-film center"></i>
                            <div className="card-body">
                                <h5 className="card-title text-center " >Photo & Video</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <GoToTop />
            </Layout>
            <GoToTop />
        </>
    )
}

export default Service