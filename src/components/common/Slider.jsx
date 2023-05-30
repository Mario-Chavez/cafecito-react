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
                    src="https://thumbs.dreamstime.com/b/fondo-asado-fresco-del-grano-de-caf%C3%A9-con-express-una-taza-espumoso-caliente-colocado-al-lado-derecho-en-bandera-ancha-panorama-el-148693522.jpg"
                    alt="Slide 1"
                />
            </div>
            <div>
                <img
                    // className="object-fit-cover w-100 h-75"
                    src="https://lushfabric.com/wp-content/uploads/2019/01/coffee-beans-bean-cafe-cotton-fabric-curtain-upholstery-craft-material-140cm-wide-brown-5c41e2a01.jpg"
                    alt="Slide 1"
                />
            </div>
            <div>
                <img
                    // className="object-fit-cover w-100"
                    src="https://thumbs.dreamstime.com/b/ternera-de-caf%C3%A9-con-espuma-marr%C3%B3n-dentro-y-fondo-blanco-para-el-texto-espacio-vac%C3%ADo-su-dise%C3%B1o-vista-superior-169157208.jpg"
                    alt="Slide 1"
                />
            </div>
        </Slider>
    );
};

export default SliderComponent;
