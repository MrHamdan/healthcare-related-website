import React from 'react';
import doctor1 from '../../images/doctor1.jpg';
import doctor2 from '../../images/doctor2.jpg';
import doctor3 from '../../images/doctor3.jpg';
import doctor4 from '../../images/doctor4.jpg';
import doctor5 from '../../images/doctor5.jpg';
import doctor6 from '../../images/doctor6.jpg';
import doctorsBanner from '../../images/doctorsBanner.jpg';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid row mx-auto bg-dark">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4 mb-5 mx-auto align-items-center">
                    <div className="col">
                        <h1 className="display-1 fw-bold text-white">
                            Join With Us And <br />
                            <span className="text-color">Have A Healthy Life</span>
                        </h1>
                    </div>
                    <div className="col">
                        <img className="img-fluid rounded-2xl" src={doctorsBanner} alt="" />
                    </div>
                </div>
            </div>
            <h1 className=" text-center text-white display-3 fw-bold p-2">
                Our Doctor's
            </h1>
            <p className="text-center text-white fs-5 fw-bold">
                Get Connected To Our Health Center And Get Yourself Better Treatment !!
            </p>
            <div className="container row mx-auto trainer-container text-white text-center">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mx-auto">
                    <div className="col">
                        <div className="card border-dark p-1">
                            <img
                                src={doctor1}
                                className="card-img-top img-fluid p-3"
                                alt="..."
                            />
                            <div className="card-body text-black">
                                <h3 className="card-title fw-bold">Dr. Rodik Anderson</h3>
                                <p className="fs-5">Eye Specialists</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-dark p-1">
                            <img
                                src={doctor2}
                                className="card-img-top img-fluid p-3"
                                alt="..."
                            />
                            <div className="card-body text-black">
                                <h3 className="card-title fw-bold">Dr. Mark Norick</h3>
                                <p className="fs-5">Physical Therapist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card  border-dark p-1">
                            <img
                                src={doctor3}
                                className="card-img-top img-fluid p-3"
                                alt="..."
                            />
                            <div className="card-body text-black">
                                <h3 className="card-title fw-bold">Dr. Mazy Mony</h3>
                                <p className="fs-5">Dental Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container row mx-auto trainer-container text-white text-center">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mx-auto mb-5">
                    <div className="col">
                        <div className="card  border-dark p-1">
                            <img
                                src={doctor4}
                                className="card-img-top img-fluid p-3"
                                alt="..."
                            />
                            <div className="card-body text-black">
                                <h3 className="card-title fw-bold">Dr. Darlin Mandosa</h3>
                                <p className="fs-5">Skin Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card  border-dark p-1">
                            <img
                                src={doctor5}
                                className="card-img-top img-fluid p-3"
                                alt="..."
                            />
                            <div className="card-body text-black">
                                <h3 className="card-title fw-bold">Dr. Julia Jame</h3>
                                <p className="fs-5">Health Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card  border-dark p-1">
                            <img
                                src={doctor6}
                                className="card-img-top img-fluid p-3"
                                alt="..."
                            />
                            <div className="card-body text-black">
                                <h3 className="card-title fw-bold">Dr. Erik Madson</h3>
                                <p className="fs-5">Pastic Surgery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;