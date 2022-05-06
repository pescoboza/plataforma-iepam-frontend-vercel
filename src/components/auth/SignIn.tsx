// Package Imports
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";

// Component Imports
import AuthError from "./AuthError";

// Component
export default function SignIn() {
    const router = useRouter();
    const [errornotification, seterrornotification] = useState(false);
    const [errormessage, seterrormessage] = useState("");

    const errorclose = () => {
        seterrornotification(false);
    };

    const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        //Code to handle login
        router.push("/buscar");
    };

    return (
        <>
            <div className="flex flex-col justify-center py-20 sm:px-4">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link href="/">
                        <a className="flex items-center  justify-center">
                            <img
                                className="h-16 w-auto cursor-pointer"
                                src="/images/iepam-logo.svg"
                                alt="Gobierno Nuevo León"
                            />
                            <span className="mx-5 hidden rounded-md border border-gray-500 bg-gray-50 py-1 px-3 text-sm text-gray-600 md:block">
                                Candidatos
                            </span>
                        </a>
                    </Link>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="border bg-white sm:rounded-lg">
                        <form className="space-y-1 p-3 " onSubmit={handleLogin}>
                            <div>
                                <div className="mb-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="E-mail"
                                        required
                                        className="focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="my-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        autoComplete="current-password"
                                        required
                                        className="focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="p-3 sm:rounded-lg">
                        <div className="mb-2 flex w-full content-between items-stretch justify-between text-center">
                            <Link href="/olvidaste-contrasena" passHref>
                                <div className="focus:outline-none flex w-full cursor-pointer justify-center rounded-md py-2 px-4 text-sm font-medium text-gray-600 focus:ring-0">
                                    ¿Olvidaste tu contraseña?
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="border bg-white p-3 sm:rounded-lg">
                            <div className="mx-4 flex justify-between">
                                <div className="mr-4 py-2 text-center text-sm font-medium text-gray-800 sm:text-base">
                                    <span>Todavía no estás registrado?</span>
                                </div>
                                <Link href="/autenticacion/crear-cuenta" passHref>
                                    <div className="focus:outline-none flex cursor-pointer items-center rounded-md bg-green-400 py-2 px-4 text-sm hover:bg-green-500">
                                        <span className="font-medium leading-none text-white">Crea tu cuenta</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthError errornotification={errornotification} errormessage={errormessage} errorclose={errorclose} />
        </>
    );
}
