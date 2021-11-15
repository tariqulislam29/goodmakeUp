import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {

    return (
        <div className="banner-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://images.squarespace-cdn.com/content/v1/5789665820099e823fd2e52f/1472404423876-9PG1O9WAXU3LAN1WPD1M/gxl_5241f834-837c-45e1-ac71-184c0aa613db.jpg?format=2500w"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>CREATE YOUR PERFECT LIPS</h3>
                        <p>Find your perfect Shade!</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://cdn.mos.cms.futurecdn.net/wjvbdxWPvVEDbBYpYjc8Ka-768-80.jpg"
                        alt="Second slide"
                    />


                    <Carousel.Caption>
                        <h3>FEAST YOUR LIPS</h3>
                        <p>Clean Beauty for everyone</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-lipsticks-1608297672.jpg"
                        alt="Third slide"
                    />


                    <Carousel.Caption>
                        <h3>LIP LAB BY MAKEUP</h3>
                        <p>Create your own custom lipsticks
                        </p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;