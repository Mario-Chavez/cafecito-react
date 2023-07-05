import React, { useEffect, useState } from "react";
import { Image, Row, Col, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerUnProductos } from "../helpers/queries";

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState("");

    useEffect(() => {
        obtenerUnProductos(id).then((res) => {
            console.log(res);
            setProducto(res);
        });
    }, []);

    return (
        <Container className="mainPage">
            <Row className=" my-md-4 text-center my-5">
                <div>
                    <img
                        className="w-75 rounded-5"
                        src={producto.imagen}
                        alt={producto.nombreProducto}
                    />
                </div>
                <div className="text-center">
                    <h2 className="mt-3 mt-lg-5 mb-3">{producto.nombreProducto}</h2>
                    <p className="">{producto.descripcion}</p>
                    <p className="">
                        Precio:{" "}
                        <span className="text-danger fw-bold"> ${producto.precio}</span>
                    </p>
                </div>
            </Row>
        </Container>
    );
};

export default DetalleProducto;
