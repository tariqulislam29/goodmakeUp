import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';
import './PurchaseOrder.css'
const PurchaseOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { user } = useAuth();
    // console.log(user?.displayName);
    useEffect(() => {
        const url = `https://damp-dusk-29893.herokuapp.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    const status = "pending";

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://damp-dusk-29893.herokuapp.com/purchaseOrders', { ...data, id, status })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();


                }
            })


    }

    return (
        <div className="makeup-bg purchaseOrder">
            <Header></Header>
            <div className="container pt-5 ">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div>
                            <img src={product.img} alt="" className="w-100 image-size1" />
                        </div>
                        <br />
                        <h2>Description Of Product</h2>
                        <hr />
                        <br />
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <p className="text-danger"><b>${product.price}</b></p>
                    </div>
                    <div className="col-lg-6 col-sm-12 ">
                        <div>
                            <div className="check ">
                                <div className="check-detail ">

                                    <div className="box-selects makeup-bg">
                                        <h2>Information</h2>

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="col  my-3">
                                                <input type="text" className="form-control" id="formGroupExampleInput" value={product.name} disabled {...register("product_name")} />

                                            </div>
                                            <div className="col  my-3">
                                                <input type="text" className="form-control" id="formGroupExampleInput" value={user.displayName} {...register("name")} />

                                            </div>
                                            <div className="col my-3">

                                                <input type="email" className="form-control" id="formGroupExampleInput" value={user.email} {...register("email", { required: true })} />

                                            </div>
                                            <div className="col my-3">
                                                <input type="tel" className="form-control" id="formGroupExampleInput" placeholder="Mobile Number" {...register("mobilenumber", { required: true, minLength: 6, maxLength: 12 })} />


                                            </div>
                                            <div className="col  my-3">
                                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Address" {...register("address", { required: true, maxLength: 100 })} />

                                            </div>
                                            <div className="col my-3">
                                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Quantity" {...register("quantity", { required: true, maxLength: 100 })} />



                                            </div>

                                            <input type="submit" value="Place the order" className="search-button p-2  my-3" />
                                        </form>




                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PurchaseOrder;