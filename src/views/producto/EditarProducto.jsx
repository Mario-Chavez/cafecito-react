import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaEditarProductosApi, obtenerUnProductos } from "../../helpers/queries";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditarProducto = () => {
    /* hook de router-dom que se encarga de sacar los parametros q recibimos en la url  */
    const { id } = useParams();
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        obtenerUnProductos(id).then((resp) => {
            if (resp) {
                setValue("nombreProducto", resp.nombreProducto);
                setValue("categoria", resp.categoria);
                setValue("imagen", resp.imagen);
                setValue("descripcion", resp.descripcion);
                setValue("precio", resp.precio);
            } else {
                console.log("sin respuesta");
            }
        });
    }, []);

    const onSubmit = (productEdit) => {
        // console.log(productEdit);
        consultaEditarProductosApi(productEdit, id).then((resp) => {
            if (resp && resp.status === 200) {
                Swal.fire(
                    "Producto Actualizado!",
                    `El producto : ${productEdit.nombreProducto} a sido actualizado correctamente.`,
                    "success"
                );
                navegacion("/administrador");
            } else {
                Swal.fire(
                    "Se produjo un error!",
                    `El producto : ${productEdit.nombreProducto} no fue actualizado, intentelo en breve.`,
                    "error"
                );
            }
        });
    };

    return (
        <section className="container">
            <h1 className="display-4 text-center mb-5">Editar Productos</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto formulario p-2 border"
            >
                <Form.Group className="mb-3">
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese un nombre de producto"
                        {...register("nombreProducto", {
                            required: "Ejemplo Cafe",
                            minLength: {
                                value: 2,
                                message:
                                    "El nombre del producto debe tener como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 20,
                                message:
                                    "El nombre del producto debe tener como maximo 20 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.producto?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ejemplo 150"
                        {...register("precio", {
                            required: "El precio del producto es obligatorio",
                            minLength: {
                                value: 1,
                                message: "El  precio debe tener como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 7,
                                message:
                                    "El  precio debe tener como maximo 20 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.precio?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una URL"
                        {...register("imagen", {
                            required: "Ej https://urldelaimagen.... ",
                            minLength: {
                                value: 8,
                                message: "La URL debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 200,
                                message: "La URL debe tener  como maximo 200 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">{errors.url?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select {...register("categoria")}>
                        <option value="bebida caliente">Bebida caliente</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                    <Form.Text className="text-danger">{errors.url?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion de producto*</Form.Label>
                    <Form.Control
                        as="textarea"
                        roxs={3}
                        {...register("descripcion", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 8,
                                message:
                                    "La descripcion debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 400,
                                message:
                                    "La descripcion debe tener  como maximo 400 caracteres",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">
                        {errors.descripcion?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <div className="my-5 d-flex justify-content-center ">
                        <Button type="submit" className="px-5 ">
                            Editar
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </section>
    );
};

export default EditarProducto;
