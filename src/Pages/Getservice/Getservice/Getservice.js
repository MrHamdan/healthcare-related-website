import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router';
import './Getservice.css'


const Getservice = () => {
    const { id } = useParams();
    const [singleServices, setSingleServices] = useState([]);

    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch("/custom-data.json")
            .then((res) => res.json())
            .then((data) => setSingleServices(data));
    }, []);

    useEffect(() => {
        const singleDetail = singleServices.find(
            (employee) => employee.id === id
        );
        setSingleService(singleDetail);
    }, [singleServices]);

    return (
        <div>
            <h1 className="text-design pt-5 pb-5">Here's Full Detail's Of Our {singleService?.title} Service.</h1>
            <Card className="container d-flex pt-4 px-4 mb-5 pb-5">
                <Card.Img variant="top" src={singleService?.img} />
                <Card.Body>
                    <Card.Title className="text-design4">{singleService?.title}</Card.Title>
                    <Card.Text className="text-style container">
                        {singleService?.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted text-style">Name : {singleService?.name}</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Getservice;