import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'


const Banner = () => {
    return (
        <div>
            <div className="custom-bg d-flex align-items-center">
                <p className="text-design container ms-3">MediCare Health Center <br />We Provide One Of The Best Health Care Services All Over The World <br /><Button className=" mx-auto" variant="success">Take A Tour</Button></p>
            </div>

            <div className="carousel-design mx-auto">
                <h1 className="text-design mt-5 mb-5">Here Are Some Interesting Images Of MediCare Health Center</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="fw-bolder fs-6">
                            <h3>One Of Our Professional Dr.</h3>
                            <p>He is our Eye Care Specialists</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="fw-bolder fs-6">
                            <h3>This Is The Image Of A On Going Surgery</h3>
                            <p>One Of Our Senior Doctor Doing OT.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="fw-bolder fs-6">
                            <h3>This Is The Image Of A Major Nose Operation</h3>
                            <p>Nose Operation By Our Doctors</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;