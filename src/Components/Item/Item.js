import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'
const Item = (props) => {
    const { _id, name, img, description, price } = props.item;
    return (
        <div>

            <Col className="col-design" >

                <Card className="card card-design makeup-bg text-center">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title fw-bold mb-4">{name}</Card.Title>
                        <p className="text-start">{description}</p>
                        <p className="text-center">${price}</p>
                    </Card.Body>

                    <Link to={`/purchaseOrder/${_id}`}>
                        <button className=" text-dark bg-light  mb-2 mx-2 py-1 w-75 border-0">Buy Now</button>
                    </Link>

                </Card>
            </Col>
        </div>
    );
};

export default Item;