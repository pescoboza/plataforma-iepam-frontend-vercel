import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

export default function form() {
    const router = useRouter();

    const schema = yup
        .object({
            firstName: yup.string().required().max(80),
            lastName: yup.string().required().max(100),
            secondLastName: yup.string().required().max(100),
            Email: yup.string().required().email(),
            Message: yup.string().required(),
            //File: yup.string().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        fetch("/api/formdata", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        alert(`Es tu nombre: ${data.firstName}?`);
        router.push("/thankyou");
    };

    //{errors.firstName?.message}
    // {errors.lastName?.message}
    // {errors.secondLastName?.message}
    // {errors.Email?.message}
    // {errors.Message?.message}
    //{errors.File && '    Archivos son requeridos'}

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous"
            />
            <div class="bg-gray-50">
                <div class="container ">
                    <div class="mb-5">
                        <div class="text-center">
                            <img src="../images/iepamLogo.png" />
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="card">
                            <h5 class="card-header">Formulario</h5>
                            <div class="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {console.log(errors)}
                                    <ul className="lista">
                                        <li class="mb-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Nombre"
                                                id="first"
                                                {...register("firstName")}
                                                name="firstName"
                                            />

                                            <div class="red">{errors.firstName && "  Nombre es requerido"}</div>
                                        </li>
                                        <li class="mb-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Primer apellido"
                                                id="last"
                                                {...register("lastName")}
                                                name="lastName"
                                            />

                                            <div class="red">
                                                {errors.lastName && "   Primer apellido es requerido"}
                                            </div>
                                        </li>

                                        <li class="mb-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Segundo apellido"
                                                id="second last"
                                                {...register("secondLastName")}
                                                name="secondLastName"
                                            />

                                            <div class="red">
                                                {errors.secondLastName && " Segundo apellido es requerido"}
                                            </div>
                                        </li>

                                        <li class="mb-3">
                                            <input
                                                class="form-control"
                                                type="email"
                                                placeholder="Correo electrónico"
                                                id="email"
                                                {...register("Email")}
                                                name="Email"
                                            />

                                            <div class="red">{errors.Email && "  Correo es requerido"}</div>
                                        </li>

                                        <li class="mb-3">
                                            <input
                                                class="form-control"
                                                type="textarea"
                                                placeholder="Mensaje"
                                                id="message"
                                                {...register("Message")}
                                                name="Message"
                                            />

                                            <div class="red">{errors.Message && "    Mensaje es requerido"}</div>
                                        </li>

                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary">
                                                Enviar
                                            </button>
                                        </div>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
