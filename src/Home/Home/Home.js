import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Footer from '../Footer/Footer';
import RoomCards from '../RoomCards/RoomCards';
import './Home.css'


const Home = () => {
    return (
        <div>
            <CarouselSlider></CarouselSlider>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6"><h2 className='fw-bold'>Welcome to Salik Hotel</h2>
                        <p className='lh-lg'>Salik Hotel welcomes you to enjoy comfort and luxury, a place where you will find exceptional five star facilities and world class hospitality.</p>

                        <p className='lh-lg'>The Hotel features 140 fully equipped deluxe and suite rooms, an extensive array of restaurant outlets catering for international and local palates, fully equipped fitness centre, sauna and steam, authentic Thai Spa, heated roof top swimming pool, the only fully stocked licensed bar in the City and a full range of meeting and event facilities ideal for business and private gatherings for up to 1000 people.</p>

                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <RoomCards></RoomCards>
            <Footer></Footer>
        </div>
    );
};

export default Home;