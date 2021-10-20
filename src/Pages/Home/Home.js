import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/custom-data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="home">
            <Router>
                <Banner></Banner>
            </Router>

            <div className="container mt-5">
                <div className="text-center py-5">
                    <h1 className="text-white text-design3">Here's Our Popular Services</h1>
                    <h4 className="text-white text-design2">Here you can find our most poular services. There are many more services in the course section you can explore more services here.</h4>
                </div>
                <div id="services" className="row row-cols-1 row-cols-md-3 p-5">
                    {/* Show services */}
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <div className="choose__us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">
                <div>
                    <img src="https://www.medsearch.ca/x/cdn/?https://storage.googleapis.com/wzukusers/user-18551734/images/02d3973f580a43ab91d8376bdf7e26ff/Physicians2.jpg" alt="" />
                </div>
                <div className="choose__us__container">
                    <div>
                        <span className="text-left text-design text-white fw-bolder fs-2">Why Choose Us</span>
                        <h1>We Always Provide The Best <br /> Services</h1>
                        <h5>To be a renowned organization at the leading edge of Medicine, <br /> providing quality healthcare to meet our nation's aspirations.</h5>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 ml-8 container">
                        <div>
                            <h2>Qualified Doctors</h2>
                            <h6>MediCare Health Center aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK quality center in the Middle East. </h6>
                        </div>
                        <div>
                            <h2>Emergency Departments</h2>
                            <h6>Emergency department became commonly used when emergency medicine was recognized as a medical specialty, and hospitals and medical centres developed departments.</h6>
                        </div>
                        <div>
                            <h2>Excellent Services</h2>
                            <h6>Clinical excellence must be the priority for any health care service provider. MediCare health center ensures the best healthcare service comprise of professional.</h6>
                        </div>
                        <div>
                            <h2>Great Infrastructure</h2>
                            <h6>MediCare has 3 buildings on both sides of the Panthapath Main Road, connected by an over bridge. The hospital with more than 6 lac square feet.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;