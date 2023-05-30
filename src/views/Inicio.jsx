import React from "react";
import CarouselComp from "../components/common/Carousel";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
    return (
        <>
            <CarouselComp />
            <h1 className="display-4 text-center">Nuestros Productos</h1>
            <hr />
            <CardProducto />
        </>
    );
};

export default Inicio;
