import React from "react";
import CarouselComp from "../components/common/Carousel";
import CardProducto from "./producto/CardProducto";
import CrearProducto from "./producto/CrearProducto";
import { Container } from "react-bootstrap";

const Inicio = () => {
    return (
        <>
            <CarouselComp />
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Nuestros Productos</h1>
                <hr />
                <CardProducto />
            </Container>
        </>
    );
};

export default Inicio;
