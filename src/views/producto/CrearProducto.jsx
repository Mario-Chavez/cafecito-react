import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearProducto = () => {
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
        <section className="container">
            <h1 className="display-4 text-center mb-5">Crear Productos</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto formulario p-2 border"
            >
                <Form.Group className="mb-3">
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese un nombre de producto"
                        {...register("producto", {
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
                        {...register("url", {
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
                        <option value="cafe">Cafe</option>
                        <option value="jugos">Jugos</option>
                        <option value="comida">Comida</option>
                    </Form.Select>
                    <Form.Text className="text-danger">{errors.url?.message}</Form.Text>
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
