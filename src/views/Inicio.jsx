import React from "react";
import CarouselComp from "../components/common/Carousel";
import CardProducto from "./producto/CardProducto";
import EditarProducto from "./producto/EditarProducto";
import CrearProducto from "./producto/CrearProducto";
import ItemProducto from "./producto/ItemProducto";
import DetalleProducto from "./DetalleProducto";
import Error404 from "./Error404";

const Inicio = () => {
    return (
        <>
            <CarouselComp />
            <h1 className="display-4 text-center">Nuestros Productos</h1>
            <hr />
            <CardProducto />

            {/* <EditarProducto /> */}
            <CrearProducto />
            {/* <ItemProducto /> */}
            {/* <DetalleProducto />
            <Error404 /> */}
        </>
    );
};

export default Inicio;
