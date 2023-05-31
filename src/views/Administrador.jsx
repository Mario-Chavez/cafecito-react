import React from "react";
import { Button, Container } from "react-bootstrap";

const Administrador = () => {
    return (
        <Container>
            <div className="row">
                <div className="display-4 col-8">
                    <h1>Nuestros Productos</h1>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-primary">
                        Agregar Producto
                    </button>
                </div>
            </div>
            <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Url Imagen</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mocaccio Canela</td>
                        <td>$ 1560</td>
                        <td>
                            https://media.istockphoto.com/id/1303583671/es/foto/taza-de-caf%C3%A9-con-humo-y-granos-de-caf%C3%A9-sobre-fondo-de-madera-viejo.jpg?s=612x612&w=0&k=20&c=44dPudamK4iq6pQf_GP-AcoEJJg-X4b10fuYxw8z1wM=
                        </td>
                        <td>Categoria</td>
                        <td className="row mx-1">
                            <Button variant="warning"> Editar</Button>
                            <Button variant="danger"> Borrar</Button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default Administrador;
