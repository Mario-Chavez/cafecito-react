import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image
                        src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RZeTjDoZV9cHVGa0I7j_GTWS-u_Z9-411XG0klVBi-ucbM0A_-X5ir_ns5JDarPodKw&usqp=CAU"
                        }
                        alt="cafe"
                        fluid
                    />
                </Col>
                <Col md={6}>
                    <h2>Soy titulo</h2>
                    <p>soy el texto</p>
                </Col>
            </Row>
        </Container>
    );
};

export default DetalleProducto;
