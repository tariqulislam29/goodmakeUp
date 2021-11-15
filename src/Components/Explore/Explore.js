import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Item from '../Item/Item';

const Explore = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://damp-dusk-29893.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);


    if (items.length === 0) {
        return (<div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }
    return (
        <div>
            <Header></Header>

            <div className="bg-dark">
                <div className=" d-flex justify-content-between container pt-5">
                    <div>
                        <h1 className="makeup-text fw-bold">Popular Items</h1>
                        <p className="makeup-text">Find your best choice</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className=" text-light makeup-bg px-4 py-2 border-0 rounded" >More Items</button>
                    </div>

                </div>
                <hr className="container makeup-text " />


                <Row xs={1} md={4} className="g-4 m-5 custom-row">
                    {
                        items.map(item => <Item
                            key={item.key}
                            item={item}
                        >
                        </Item>)
                    }


                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;