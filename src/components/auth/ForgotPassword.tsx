// Package Imports
import Link from "next/link";
import { useState } from "react";

// Icon Imports
import { iconCheckCircled } from "@/components/icons";

const icons = {
    checkCircle: iconCheckCircled,
};

// Component
export default function ForgotPassword() {
    const [sent, setsent] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="flex flex-col justify-center py-20 sm:px-4">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link href="/">
                        <img
                            className="mx-auto h-16 w-auto cursor-pointer"
                            src="/images/iepam-logo.svg"
                            alt="Gobierno Nuevo León"
                        />
                    </Link>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white p-3 sm:rounded-lg">
                        {!sent ? (
                            <form className="space-y-1" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="focus:outline-none flex w-full justify-center rounded-md bg-gray-600 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:ring-0"
                                    >
                                        Olvidé Mi Contraseña
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <div className="flex items-center">
                                    <icons.checkCircle
                                        className="mr-2 h-7 w-7 self-center text-green-500"
                                        aria-hidden="true"
                                    />
                                    <h2 className="text-lg font-medium tracking-tight text-gray-900 sm:text-xl ">
                                        <span className="block">Email enviado</span>
                                    </h2>
                                </div>
                                <span className="block py-5 text-base leading-none text-gray-600">
                                    Hemos enviado un email con un link para que restablezca su contraseña.
                                </span>
                                <div className="w-full">
                                    <Link href="/">
                                        <div className="focus:outline-none flex w-full cursor-pointer justify-center rounded-md border border-gray-600 py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-0">
                                            Volver al Inicio
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white p-3 sm:rounded-lg">
                        <div className="mb-4 flex w-full content-between items-stretch justify-center text-center">
                            <Link href="/autenticacion/crear-cuenta" passHref>
                                <div className="focus:outline-none flex w-full cursor-pointer justify-center rounded-md border border-gray-600 py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-0">
                                    Crear Cuenta
                                </div>
                            </Link>
                        </div>
                        <div className="flex w-full content-between items-stretch justify-center text-center">
                            <Link href="/autenticacion-sesion" passHref>
                                <div className="focus:outline-none flex w-full cursor-pointer justify-center rounded-md border border-gray-600 py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-0">
                                    Iniciar Sesión
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <AuthError
        errornotification={errornotification}
        errormessage={errormessage}
        errorclose={errorclose}
      /> */}
        </>
    );
}
