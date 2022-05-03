// Package Imports
import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";

// Component Imports
import MobileDropDown from "./MobileDropDown";
import UserDropDown from "./UserDropDown";
import SearchBar from "./SearchBar";

// Icon Imports
import { iconBell } from "../icons";

// Icons Object
const icons = {
    bell: iconBell,
};

// Component
export default function Navbar() {
    const [user, setuser] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") setuser(JSON.parse(localStorage.getItem("user") ?? "null"));
    }, []);
    return (
        <div className="fixed z-10 w-full">
            <Popover className="bg-white">
                {({ open }) => (
                    <>
                        <div className="border-b border-gray-300">
                            <div className="mx-auto flex h-16 max-w-7xl justify-between px-2">
                                <div className="flex px-2 lg:px-0">
                                    <div className="flex items-center">
                                        <Link href="/">
                                            <>
                                                <span className="sr-only">Home</span>
                                                <img
                                                    className="h-14 w-auto cursor-pointer md:hidden"
                                                    src="/images/iepam-mark.svg"
                                                    alt="Gobierno Nuevo León"
                                                    width={100}
                                                    height={100}
                                                />
                                            </>
                                        </Link>
                                        <Link href="/">
                                            <>
                                                <span className="sr-only">Home</span>
                                                <img
                                                    className="hidden h-14 w-auto cursor-pointer md:block"
                                                    src="/images/iepam-logo.svg"
                                                    alt="Gobierno Nuevo León"
                                                    width={340}
                                                    height={100}
                                                />
                                            </>
                                        </Link>
                                        <span className="mx-5 hidden rounded-md border border-gray-500 bg-gray-50 py-1 px-3 text-sm text-gray-600 md:block">
                                            Candidatos
                                        </span>
                                    </div>
                                </div>
                                <MobileDropDown open={open} />
                                <>
                                    <div className="hidden lg:flex lg:items-center">
                                        <a href="/cuenta/notificaciones" className="mx-4 p-1">
                                            <span className="sr-only">Bell</span>
                                            
                                        </a>
                                    </div>
                                </>

                                <div className="hidden lg:flex lg:items-center">
                                    <UserDropDown />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Popover>
        </div>
    );
}
