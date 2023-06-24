import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
    // console.log(producto);
    return (
        <>
            <Row className=" justify-content-center my-5">
                {producto.map((producto) => (
                    <Col sm={6} md={4} lg={3} key={producto.id} className="my-2">
                        <Card className="rounded-0 h-100">
                            <Card.Img
                                className="rounded-3 card-imagen"
                                variant="top"
                                src={producto.imagen}
                                alt={producto.nombreProducto}
                            />
                            <Card.Body className="featured-color">
                                <Card.Title className="pb-3">
                                    {producto.nombreProducto}
                                </Card.Title>
                                <Link
                                    to={`/detalle/${producto.id}`}
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    Ver producto
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CardProducto;
