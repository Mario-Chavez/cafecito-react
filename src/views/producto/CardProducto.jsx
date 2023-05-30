import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = () => {
    return (
        <>
            <Card className="my-3 cards col-lg-3 col-md-4 m-1 ">
                <Card.Body>
                    <div className="d-flex">
                        <Card.Title className=" mx-auto">Sopy titulo</Card.Title>
                    </div>
                    <hr />
                    <div className="my-4">
                        <Card.Img src="codigo de peli" className="mx-auto d-block" />
                        <Card.Text className="my-3">Genero :soy genero</Card.Text>
                        <Card.Text className="my-3">
                            Descripcion :<span className="p-1">soy Descripcion </span>
                        </Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button
                        className="col-7 botonFormulario"
                        variant="danger"
                        // onClick={() => handleBorrar(peli.nombrePeli)}
                    >
                        Borrar
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default CardProducto;
