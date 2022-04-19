// Package Imports
import { FC, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

// Icon Imports
import { iconMenu, iconClose, iconUser, iconBell, iconLayout, iconCheckCircled, iconGear } from "../icons";
import Link from "next/link";

// Icons Object
const icons = {
    menu: iconMenu,
    close: iconClose,
};

// Component
const MobileDropDown: FC<{ open: boolean }> = ({ open }) => {
    const user = {
        firstName: "Carlos",
        lastName: "Alvarez",
        email: "carlos.alvarez@autorep22.com",
    };

    return (
        <>
            {/* Mobile Topbar */}
            <div className="flex items-center lg:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none ">
                    <span className="sr-only">Open main menu</span>
                    <icons.menu className="block h-5 w-5 stroke-2" aria-hidden="true" />
                </Popover.Button>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <div className="lg:hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Overlay
                            static
                            className="fixed inset-0 z-20 bg-black bg-opacity-25"
                            aria-hidden="true"
                        />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 right-0 z-30 w-full max-w-none origin-top transform transition"
                        >
                            <div className="divide-y divide-gray-200 rounded-md bg-white ring-1 ring-black ring-opacity-5">
                                <div className="pt-2">
                                    <div className="flex items-center justify-between px-2">
                                        <div className="flex items-center">
                                            <Link href="/">
                                                <span className="sr-only">Home</span>
                                                <img
                                                    className="h-12 w-auto md:ml-2 md:mt-1 md:h-14"
                                                    src="/images/iepam-logo.svg"
                                                    alt="Gobierno Nuevo León"
                                                />
                                            </Link>
                                            <span className="ml-3 rounded-md border border-gray-500 bg-gray-50 py-1 px-3 text-center text-sm leading-none tracking-tighter text-gray-600">
                                                Candidatos
                                            </span>
                                        </div>
                                        <div className="-mr-0.5">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                                                <span className="sr-only">Close menu</span>
                                                <icons.close className="h-5 w-5" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center border-t px-4 pt-3 pb-1">
                                        <div className="my-1 flex items-center rounded-md bg-white text-sm focus:outline-none">
                                            <span className="sr-only">User Initials</span>
                                            <div className="flex h-8 w-8 items-stretch justify-center rounded-full bg-gray-600">
                                                <p className="self-center font-medium text-white">
                                                    {user.firstName[0] + user.lastName[0]}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-gray-800">
                                                {user.firstName + " " + user.lastName}
                                            </div>
                                            <div className="text-sm font-medium leading-none text-gray-500">
                                                {user.email}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-1 grid grid-cols-2 space-y-0 px-3 md:mt-4">
                                        {account.map((item) => (
                                            <a key={item.name} href={item.href}>
                                                <div className="flex cursor-pointer items-center px-1 py-1 text-sm text-gray-700 sm:text-base">
                                                    <item.icon
                                                        className="mr-3 h-5 w-5 text-gray-600 md:ml-4"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="flex cursor-pointer items-center py-1 text-sm text-gray-700">
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    <div className="border-t py-4 px-3">
                                        <div className="">
                                            <a
                                                href="/autenticacion/iniciar-sesion"
                                                className="flex w-full items-center justify-center rounded-md border border-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                                            >
                                                Cerrar Sesión
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition.Child>
                </div>
            </Transition.Root>
        </>
    );
};

const account = [
    { name: "Notificaciones", href: "/cuenta/notificaciones", icon: iconBell },
    { name: "buscar", href: "/buscar", icon: iconLayout },
    { name: "Suscripción", href: "/cuenta/suscripcion", icon: iconCheckCircled },
    { name: "Preferencias", href: "/cuenta/preferencias", icon: iconUser },
    {
        name: "Configuración",
        href: "/configuracion/datos-personales",
        icon: iconGear,
    },
];

export default MobileDropDown;
