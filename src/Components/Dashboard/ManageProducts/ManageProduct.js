import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProduct = (props) => {
    const { item } = props;
    const { _id, price, name, img, description } = item;



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://damp-dusk-29893.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                    }
                });
        }
    }

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
                    <div>


                        <button className=" text-dark bg-light  mb-2 mx-2 py-1 w-75 border-0" onClick={() => { handleDelete(_id) }}>Delete Item</button>
                    </div>

                </Card>
            </Col>


        </div>
    );
};

export default ManageProduct;