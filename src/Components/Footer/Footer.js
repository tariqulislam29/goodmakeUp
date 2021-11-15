import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer ">




                <div>
                    <h3 className="makeup-text fs-5 fw-bold" >Contact</h3>
                    <h5 className="makeup-text fs-6">Phone</h5>
                    <p className="makeup-text fs-6">018430518xx</p>
                    <h5 className="makeup-text fs-6">Email</h5>
                    <p className="makeup-text fs-6">goodmakeup@gmail.com</p>
                    <h5 className="makeup-text fs-6">Address</h5>
                    <p className="makeup-text fs-6">Dhaka-1361,Bangladesh</p>
                </div>

                <div className="explore ">
                    <h3 className="makeup-text fs-5 fw-bold">Explore</h3>
                    <Link to='/explore' className="p-3 makeup-text footer-link" >Items</Link>

                </div>

                <div>

                    <h3 className="makeup-text fs-5 fw-bold">Support</h3>
                    <h5 className="makeup-text fs-6 px-5">Free Delivery Service In Dhaka</h5>
                    <h5 className="makeup-text fs-6">Day/Night Delivery</h5>

                </div>

            </div>
            <div className="copywrite py-3">
                <small className="text-light">Copyright &copy; 2021 GoodMakeUp.com</small>
            </div>

        </div>
    );
};

export default Footer;