import React from 'react';
import Rating from 'react-rating';
const ReviewHome = ({ singleReview }) => {
    const { name, review, rating } = singleReview;
    return (
        <div>
            <div className="d-flex justify-content-center">
                <section class="main-container ">
                    <div class="main-box">

                        <div class="card-container">
                            <div class="review-card makeup-bg text-light">
                                <div class="card-top">
                                    <p>{review}
                                    </p>
                                    <div class="card-bottom">
                                        <div class="prof">
                                            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/170225492/original/e13a0aa84550b53f097f73e0b15922842dd82695/make-gaming-avatar-logo.jpg" />
                                        </div>
                                        <div class="prof-detail">
                                            <h4>{name.toUpperCase()}</h4>
                                            <Rating
                                                initialRating={rating}
                                                emptySymbol="far fa-star icon-color"
                                                fullSymbol="fas fa-star icon-color"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReviewHome;