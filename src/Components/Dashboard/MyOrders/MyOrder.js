
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrder = (props) => {

    const { order } = props;
    const { name, email, mobilenumber, address, quantity, status, id, _id } = order;



    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `https://damp-dusk-29893.herokuapp.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://damp-dusk-29893.herokuapp.com/purchaseOrders/${id}`;
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
            <div>
                <Col className="full-cards">
                    <Card className="full-card makeup-bg">
                        <div className="mybook-section">
                            <div className="room-details-section">
                                <div className=" image-div">
                                    <img src={product?.img} className="w-100 h-50" alt="" />
                                </div>
                                <div className="details-div d-flex align-items-center ps-2">
                                    <div> <h5 className="fs-6">{product?.name}</h5>
                                        <p>Price: {product?.price}</p></div>

                                </div>
                            </div>

                            <div className="order-details-section d-flex align-items-center ms-2 p-2">
                                <div className="  order-details  ">
                                    <p>Name:{name}</p>
                                    <p>Email:{email}</p>
                                    <p>Mobile Number:{mobilenumber}</p>
                                    <p>Address:{address} </p>
                                    <p>Quantity:{quantity}</p>
                                    <p className="text-danger fw-bold">Status: {status}</p>
                                </div>


                            </div>

                            <div className="button-section d-flex justify-content-center align-items-center">
                                <button className="px-4 border-0 my-3 text-dark bg-light " onClick={() => { handleDelete(_id) }}>Delete</button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default MyOrder;