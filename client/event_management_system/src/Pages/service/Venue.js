import React from 'react'
import Layout_Second from '../../Component/Layout/Layout_Second';
import '../../style/venue.css';
import img from '../../images/umaidPlace.png'
import { useNavigate } from 'react-router-dom';
import GoToTop from '../../Component/GoToTop';

const Venue = () => {

    const navigate = useNavigate()
    const hanldeClick = (e) => {

        e.preventDefault();
        alert('For more information contact us')
        navigate('/contact')
    }

    return (
        <>
            <Layout_Second>
                <div className="container-fluid" style={{ marginTop: "120px" }}>
                    <h1 style={{ color: "#593386" }} className='text-center venueheading'>Venues</h1>
                    <p className='text-center'>We are not just Event planners but a complete Event Management portal. The hotels listed on our website we assure you the best price, elaborated menu, class a part service. We have associated with these hotels and we have worked together on several successful projects and hence and this relationship has been built on a foundation of trust, mutual respect, and open communication. Our organization shares a good relationship with the hotel industry through continuous collaboration, effective communication, mutual respect, and trust. This relationship has benefited our clients.</p>
                </div>

                <div className="container-fluid">
                    <div className="line-shade2"></div>
                </div>

                <div className="container-fluid">
                    <h1 style={{ color: "#593386" }} className='text-center venueheading'>Select City</h1>

                    <div class="element element-2 slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" role="option" aria-describedby="slick-slide01">

                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-3 col-md-31 first">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://destinationweddingzplanner.com/images/cities/1682514480-1_crop.png" alt="Phuket" height={295} width={300}
                                                    onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Phuket</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-md-31">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://static.toiimg.com/photo/53223360.cms" alt="Ahmedabad" height={295} width={300} onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Ahmedabad</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-md-31">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1PwZ58ePIhg0BIHcWJNBg232KoW93iCjKA&usqp=CAU" alt="Maldives" height={295} width={300}
                                                    onClick={hanldeClick}
                                                />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Maldives</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-md-31">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src={img} alt="Jaipur" height={295} width={300} onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Jaipur</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-md-3 col-md-31 first">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFkPBobuuCWPA1zCjZEc_8meuPdFfN_VIeN-ij8svzBNbKzMl1g6EXbzExo8rS6ukKjE&usqp=CAU" alt="Udaipur" height={295} width={300} onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Udaipur</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-md-31">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRF_0YEV9Oyp2TLNDzWexRD17pOM8Y3iKqQ&usqp=CAU" alt="Goa" height={295} width={300} onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Goa</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-md-31">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D7h1XmbQDH0O-SJrJalD66krzgcGMpD4_g&usqp=CAU" alt="Mumbai" height={295} width={300} onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Mumbai</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-md-31">
                                    <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                        <div className="select-city-card">
                                            <div className="select-city-img">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGfW0J7HlSPi5aL8JHCYgH-p0swscuNPU3Q&usqp=CAU" alt="Delhi" height={295} width={300} onClick={hanldeClick} />
                                            </div>
                                            <div className="select-city-text">
                                                <h3>Delhi</h3>
                                            </div>
                                        </div>
                                    </a>
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

export default Venue