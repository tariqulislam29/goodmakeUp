import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = `https://damp-dusk-29893.herokuapp.com/purchaseOrders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <div className="pt-5">
                <h2 className="  fw-bold text-center makeup-text">ManageBooks Order</h2>
                <Row xs={1} md={1} className="g-4 m-4 ">
                    {
                        orders.map(order => <ManageAllOrder
                            key={order._id}
                            order={order}
                        ></ManageAllOrder>)

                    }


                </Row>
            </div>
        </div>
    );
};

export default ManageAllOrders;