// Package Imports
import { FC, useState, useEffect } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

// Component Imports
import UserDropDownMobile from "./UserDropDownMobile";

// Icon Imports
import { iconMenu, iconClose } from "../icons";

const icons = {
    menu: iconMenu,
    close: iconClose,
};

// Component
const MobileDropDown: FC<{ open: boolean }> = ({ open }) => {
    const [user, setuser] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        setuser(JSON.parse(localStorage.getItem("user") ?? "null"));
    }, []);

    return (
        <>
            {/* Mobile Topbar */}
            <div className="flex items-center lg:hidden">
                <Popover.Button className="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 ">
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
                            className="absolute top-0 right-0 z-30 w-full max-w-none origin-top transform p-1 transition"
                        >
                            <div className="divide-y divide-gray-200 rounded-md bg-white ring-1 ring-black ring-opacity-5">
                                <div className="pt-2">
                                    <div className="flex items-center justify-between px-2">
                                        <div className="flex items-center">
                                            <Link href="/">
                                                <>
                                                    <span className="sr-only">Home</span>
                                                    <img
                                                        className="h-12 w-auto md:ml-2 md:mt-1 md:h-14"
                                                        src="/images/iepam-logo.svg"
                                                        alt="Gobierno Nuevo León"
                                                    />
                                                </>
                                            </Link>
                                            <span className="ml-3 rounded-md border border-gray-500 bg-gray-50 py-1 px-3 text-center text-sm leading-none tracking-tighter text-gray-600">
                                                Candidatos
                                            </span>
                                        </div>
                                        <div className="-mr-0.5">
                                            <Popover.Button className="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                                <span className="sr-only">Close menu</span>
                                                <icons.close className="h-5 w-5" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                    <div className="py-4 px-3">
                                        <div className="px-2">
                                            <a
                                                href="/autenticacion/crear-cuenta"
                                                className="mt-3 flex w-full items-center justify-center rounded-md bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
                                            >
                                                Registrar Negocio
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {user && <UserDropDownMobile />}
                            </div>
                        </Popover.Panel>
                    </Transition.Child>
                </div>
            </Transition.Root>
        </>
    );
};

export default MobileDropDown;
