import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewHome from '../ReviewHome/ReviewHome';
import './ReviewHome.css'
const ReviewsHome = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://damp-dusk-29893.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <h3 className="text-center py-4 makeup-text fs-2">What our customer have to say!</h3>
            <div className="bg-dark  container ">

                <Slider {...settings}>
                    {
                        reviews.map(review => <ReviewHome
                            key={review._id}
                            singleReview={review}

                        >

                        </ReviewHome>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default ReviewsHome;