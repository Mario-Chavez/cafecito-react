import React from "react";
import CarouselComp from "../components/common/Carousel";
import CardProducto from "./producto/CardProducto";
import EditarProducto from "./producto/EditarProducto";
import CrearProducto from "./producto/CrearProducto";

const Inicio = () => {
    return (
        <>
            <CarouselComp />
            <h1 className="display-4 text-center">Nuestros Productos</h1>
            <hr />
            <CardProducto />
            {/* <EditarProducto /> */}
            <CrearProducto />
        </>
    );
};

export default Inicio;
