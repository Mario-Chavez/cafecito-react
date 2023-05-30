import React from "react";
import { Carousel } from "react-bootstrap";
import taza from "../../assets/taza-cafe-crema.jpg";
import granos from "../../assets/granos-cafe.jpg";
import cafe from "../../assets/taza-cerca.jpg";
const CarouseComp = () => {
    return (
        <div className="carousel-container">
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img className="d-block w-100" src={cafe} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={taza} alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={granos} alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouseComp;
