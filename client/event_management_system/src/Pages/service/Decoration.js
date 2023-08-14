import React from 'react'
import Layout_Second from './../../Component/Layout/Layout_Second';
import { useNavigate } from 'react-router-dom';
import img from '../../images/Bbay.jpg'
import img2 from '../../images/images (2).jpg'
import img3 from '../../images/homepage1.jpg'
import img4 from '../../images/theme.jpg'
import GoToTop from '../../Component/GoToTop';
import '../../style/decoration.css'

const Decoration = () => {

    const navigate = useNavigate()
    const hanldeClick = (e) => {

        e.preventDefault();
        alert('For more information go to our work page')
        navigate('/ourwork');
    }

    return (
        <>
            <Layout_Second>
                <div className="container-fluid" style={{ marginTop: "120px" }}>
                    <h1 style={{ color: "#593386", fontSize: "64px" }} className='text-center'>Design & Decors</h1>
                    <p className='text-center'>Welcome to our Decoration page, where creativity knows no bounds, and every event becomes an enchanting masterpiece. Our Event Management System offers a stunning array of décor options to elevate your special occasions, be it a wedding, birthday party, corporate event, or theme party. With a team of skilled artisans and designers, we meticulously craft each setup to match your unique vision, ensuring that every detail aligns with the theme and atmosphere you desire. From elegant floral arrangements to captivating lighting designs and mesmerizing backdrops, our decorations will create a captivating ambiance that leaves a lasting impression on your guests. Let our experts weave their magic and turn your event into a captivating experience that will be cherished forever.</p>
                </div>
                <div className="container-fluid">
                    <div className="line-shade2"></div>
                </div>

                <div className="container-fluid">
                    <h1 style={{ color: "#593386" }} className='text-center headingvenue'>Our Work</h1>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-md-31">
                            <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                <div className="select-city-card">
                                    <div className="select-city-img">
                                        <img src={img} alt="Phuket" height={295} width={300}
                                            onClick={hanldeClick} />
                                    </div>
                                    <div className="select-city-text">
                                        <h3>BirthDay</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-md-31 ">
                            <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                <div className="select-city-card">
                                    <div className="select-city-img">
                                        <img src={img2} alt="Ahmedabad" height={295} width={300} onClick={hanldeClick} />
                                    </div>
                                    <div className="select-city-text">
                                        <h3>Wedding</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-md-31">
                            <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                <div className="select-city-card">
                                    <div className="select-city-img">
                                        <img src={img3} alt="Maldives" height={295} width={300}
                                            onClick={hanldeClick}
                                        />
                                    </div>
                                    <div className="select-city-text">
                                        <h3>Corporate Event</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-md-31">
                            <a href="listing-search?city=Sri Lanka&q=" tabIndex={0}>
                                <div className="select-city-card">
                                    <div className="select-city-img">
                                        <img src={img4} alt="Maldives" height={295} width={300}
                                            onClick={hanldeClick}
                                        />
                                    </div>
                                    <div className="select-city-text">
                                        <h3>Theme Party</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <GoToTop />
            </Layout_Second>
        </>
    )
}

export default Decoration