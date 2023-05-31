import React from "react";
import CarouselComp from "../components/common/Carousel";
import CardProducto from "./producto/CardProducto";
import EditarProducto from "./producto/EditarProducto";

const Inicio = () => {
    return (
        <>
            <CarouselComp />
            <h1 className="display-4 text-center">Nuestros Productos</h1>
            <hr />
            <CardProducto />
            <EditarProducto />
        </>
    );
};

export default Inicio;
