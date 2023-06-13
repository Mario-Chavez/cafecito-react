import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProductosApi, obtenerProductos } from "../../helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {
    const borrarProducto = () => {
        console.log("borrar");
        Swal.fire({
            title: "Estas seguro de eliminar el producto?",
            text: "No se puede revertir este paso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar!",
            cancelButtonText: "Cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                // aqui hago la peticion DELETE
                deleteProductosApi(producto.id).then((resp) => {
                    if (resp.status === 200) {
                        Swal.fire(
                            "Producto Eliminado!",
                            `El producto : ${producto.nombreProducto} a sido eliminado.`,
                            "success"
                        );
                        // actualizar el state producto del componente administardor
                        obtenerProductos().then((resp) => {
                            setProductos(resp);
                        });
                    } else {
                        Swal.fire(
                            "Se produjo un error !",
                            `Intentele realizar esta operacion  mas tarde.`,
                            "error"
                        );
                    }
                });
            }
        });
    };
    return (
        <tr>
            <td>{producto.id}</td>
            <td>{producto.nombreProducto}</td>
            <td>$ {producto.precio}</td>
            <td>{producto.imagen}</td>
            <td>{producto.categoria}</td>
            <td>
                <Link to={"/administrador/editar"} className="btn btn-warning">
                    Editar
                </Link>
                <Button variant="danger" onClick={borrarProducto}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
