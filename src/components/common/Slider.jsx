import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <Slider {...settings} className="mb-4 slider">
            <div>
                <img
                    // className="object-fit-cover w-100 h-50"
                    src="https://www.bloomberglinea.com/resizer/zSF2RafiCDOFA81QnqlWUa1GwYA=/1200x900/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/QMA63E5VYRE73GKYMOGAX5UBXU.jpg"
                    alt="Slide 1"
                />
            </div>
            <div>
                <img
                    // className="object-fit-cover w-100 h-75"
                    src="https://images.ecestaticos.com/wt_vheMICWutxWMdqaEH1UWyBps=/353x38:2118x1359/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F152%2F6b0%2Feff%2F1526b0eff12fad54065976f56c5b9e18.jpg"
                    alt="Slide 1"
                />
            </div>
            <div>
                <img
                    // className="object-fit-cover w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
                    alt="Slide 1"
                />
            </div>
        </Slider>
    );
};

export default SliderComponent;
