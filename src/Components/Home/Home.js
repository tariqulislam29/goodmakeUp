import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Items from '../Items/Items';
import ReviewsHome from '../ReviewsHome/ReviewsHome';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Items></Items>
            <ReviewsHome></ReviewsHome>
            <Gallery></Gallery>
            <Footer></Footer>

        </div>
    );
};

export default Home;