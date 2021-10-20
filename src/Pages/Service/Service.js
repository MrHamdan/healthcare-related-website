import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, name, number, description, img } = service;
    return (
        <div className="col pt-5">
            <div className="card card-design h-100 rounded-3xl shadow-2xl">
                <img src={img} className="card-img-top p-4" alt="..." />
                <div className="card-body text-white-300 fw-bolder">
                    <h3 className="card-title">{title}</h3>
                    <h5>Doctor: {name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Phone: {number}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/services/${id}`}><small><Button className="text-white fw-bold border-4" variant="success">Get Service  <i class="fas fa-arrow-right"></i></Button></small></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;