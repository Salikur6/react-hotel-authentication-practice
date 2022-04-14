import React from 'react';
import { Carousel } from 'react-bootstrap'
import './CarouselSlider.css'

const CarouselSlider = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/st4YmdX/slider1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/cYnFNBq/slider2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/wztvpVC/slider3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

/**
 * 
 * https://i.ibb.co/zRCnjvc/meeting-room.jpg
https://i.ibb.co/Rg706Jk/confrance-room.jpg
https://i.ibb.co/hDTFRFj/single-room.jpg
https://i.ibb.co/8X0dQ9h/corporate-room.jpg
https://i.ibb.co/51stzXd/family-room.jpg
https://i.ibb.co/Hx3DM5P/dubble-room.jpg
 */

export default CarouselSlider;