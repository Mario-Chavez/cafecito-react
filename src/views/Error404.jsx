import React from "react";
import { Container, Image } from "react-bootstrap";

const Error404 = () => {
    return (
        <Container className="text-center">
            <Image
                src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"
                alt="Imagen no encontrada"
                fluid
            />
        </Container>
    );
};

export default Error404;
