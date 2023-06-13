import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createProductosApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearProducto = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (newProduct) => {
        // console.log(data);
        createProductosApi(newProduct).then((resp) => {
            if (resp.status === 201) {
                Swal.fire(
                    "Producto Agregado!",
                    `El producto ${newProduct.nombreProducto} a sido agregado.`,
                    "success"
                );
                reset();
            } else {
                Swal.fire(
                    "Se produjo un error !",
                    `Intentele realizar esta operacion  mas tarde.`,
                    "error"
                );
            }
        });
    };

    return (
        <section className="container">
            <h1 className="display-4 text-center mb-5">Nuevo Producto</h1>
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
                                message: "El  precio debe tener como maximo 7 caracteres",
                            },
                            pattern: {
                                value: /^\d+(\.\d{1,2})?$/,
                                message: "Por favor, ingresa un precio válido",
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
                            required:
                                "Este campo es obligatorio. Ej https://urldelaimagen.... ",
                            minLength: {
                                value: 8,
                                message: "La URL debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 200,
                                message: "La URL debe tener  como maximo 200 caracteres",
                            },
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/,
                                message: "Por favor, ingresa una URL válida de imagen",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">{errors.url?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        {...register("categoria", { required: "Selecciona una opción" })}
                    >
                        <option value="">Seleccione una opcion</option>
                        <option value="bebida caliente">Bebida caliente</option>
                        <option value="bebida fria">Bebida fria</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
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
                            Crear
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </section>
    );
};

export default CrearProducto;
