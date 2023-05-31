import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = () => {
    return (
        <>
            <Card className="my-3 cards col-lg-3 col-md-4 m-1 ">
                <Card.Body>
                    {/* <div className="d-flex">
                        <Card.Title className=" mx-auto">Soy titulo</Card.Title>
                    </div>
                    <hr /> */}
                    <div className="mb-4">
                        <Card.Img
                            src="data:image/jpeg;base64,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"
                            className="mx-auto d-block"
                        />
                        <Card.Text className="my-3 fw-bolder">
                            Nombre de producto
                        </Card.Text>
                        <Card.Text className="my-3">
                            Precio :<span className="p-1"> $1500 </span>
                        </Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center my-2">
                    <Button className="col-5 botonFormulario" variant="primary">
                        Borrar
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default CardProducto;
