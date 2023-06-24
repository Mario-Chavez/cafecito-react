import React, { useEffect, useState } from "react";
import CarouselComp from "../components/common/Carousel";
import CardProducto from "./producto/CardProducto";
import CrearProducto from "./producto/CrearProducto";
import { Container } from "react-bootstrap";
import { obtenerProductos } from "../helpers/queries";

const Inicio = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        obtenerProductos().then((res) => {
            // console.log(res);
            setProducto(res);
        });
    }, []);

    return (
        <>
            <CarouselComp />
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Nuestros Productos</h1>
                <hr />
                <CardProducto producto={producto} />
            </Container>
        </>
    );
};

export default Inicio;
