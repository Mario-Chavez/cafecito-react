import React from "react";

import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditarProducto = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("mi submit");
        console.log(data);
        // setPacientes([...pacientes, { mascota, duenio, fecha, hora, sintomas }]);
    };

    return (
        <section>
            <h1 className="display-4 text-center">Editar Productos</h1>
            <hr />
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto formulario p-2 border"
            >
                <div>
                    <p className="text-info fs-5">
                        Llenar el formulario para crear una cita
                    </p>
                    <hr />
                </div>
                <Form.Group className="mb-3">
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una tarea"
                        {...register("producto", {
                            required: "El nombre del producto es obligatorio",
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
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una tarea"
                        {...register("producto", {
                            required: "El nombre del producto es obligatorio",
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
                        type="text"
                        placeholder="Ingrese una tarea"
                        {...register("precio", {
                            required: "El nombre del producto es obligatorio",
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

                <Form.Group>
                    <div className="my-5 d-flex justify-content-center ">
                        <Button type="submit" className="px-5 ">
                            Agregar nueva cita
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </section>
    );
};

export default EditarProducto;
