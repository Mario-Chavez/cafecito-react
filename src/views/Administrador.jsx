import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { obtenerProductos } from "../helpers/queries";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos().then((respuesta) => {
            // console.log(respuesta);
            setProductos(respuesta);
            // todo: resolvcer el error si lo huibiera en coneccion en API
        });
    }, []);

    return (
        <Container className="mainPage">
            <div className="row mt-5">
                <div className="display-4 col-8">
                    <h1>Nuestros Productos</h1>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-primary">
                        Agregar Producto
                    </button>
                </div>
            </div>
            <hr />
            <table className="table">
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
                    {productos.map((producto) => (
                        <ItemProducto
                            key={producto.id}
                            producto={producto}
                        ></ItemProducto>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default Administrador;
