// Package Imports
import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import Link from 'next/link';

// Component Imports
import MobileDropDownSignedOut from './MobileDropDownSignedOut';
import SearchBar from './SearchBar';

// Component
export default function Navbar() {
    const [user, setuser] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        setuser(JSON.parse(localStorage.getItem('user') ?? 'null'));
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
                                            <div>
                                                <span className="sr-only">Home</span>
                                                <img
                                                    className="h-14 w-auto cursor-pointer md:hidden"
                                                    src="/images/iepam-mark.svg"
                                                    alt="Gobierno Nuevo León"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        </Link>
                                        <Link href="/">
                                            <div>
                                                <span className="sr-only">Home</span>
                                                <img
                                                    className="hidden h-14 w-auto cursor-pointer md:block"
                                                    src="/images/iepam-logo.svg"
                                                    alt="Gobierno Nuevo León"
                                                    width={340}
                                                    height={100}
                                                />
                                            </div>
                                        </Link>
                                        <span className="mx-5 hidden rounded-md border border-gray-500 bg-gray-50 py-1 px-3 text-sm text-gray-600 md:block">
                                            Beta
                                        </span>
                                    </div>
                                </div>
                                <MobileDropDownSignedOut open={open} />

                                <div className="hidden lg:flex lg:items-center">
                                    <div className="hidden px-2 lg:flex lg:px-0">
                                        <nav
                                            aria-label="Global"
                                            className="hidden lg:flex lg:items-center lg:space-x-2"
                                        >
                                        <Link href="/empleos">
                                            <div className="ml-5 cursor-pointer rounded-md bg-gray-600 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700">
                                                Ver Empleos
                                            </div>
                                        </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Popover>
        </div>
    );
}
