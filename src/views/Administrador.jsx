import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { obtenerProductos } from "../helpers/queries";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";

const Administrador = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos().then((respuesta) => {
            setProductos(respuesta);
        });
    }, []);

    return (
        <Container className="mainPage">
            <div className="row mt-5">
                <div className="display-4 col-8">
                    <h1>Nuestros Productos</h1>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <Link
                        type="button"
                        className="btn btn-outline-primary"
                        to={"/administrador/crear"}
                    >
                        Agregar Producto
                    </Link>
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
                            setProductos={setProductos}
                        ></ItemProducto>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default Administrador;
