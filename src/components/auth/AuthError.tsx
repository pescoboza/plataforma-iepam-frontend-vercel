// Package Imports
import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

// Icon Imports
import { iconAdvancedSearch, iconMenu, iconClose } from "../icons";

const icons = {
    advancedSearch: iconAdvancedSearch,
    menu: iconMenu,
    close: iconClose,
};

// Component
export default function AuthError({
    errornotification,
    errormessage,
    errorclose,
}: {
    errornotification: boolean;
    errormessage: string;
    errorclose: () => void;
}) {
    const [show, setShow] = useState(errornotification);
    const [message, setmessage] = useState(errormessage);

    useEffect(() => {
        setShow(errornotification);
        setmessage(errormessage);
    }, [errornotification, errormessage]);

    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg border border-gray-500 bg-gray-50">
                            <div className="p-3">
                                <div className="flex items-start">
                                    <div className="w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-600">Error</p>
                                        <p className="mt-1 text-sm leading-none text-gray-900">{errormessage}</p>
                                    </div>
                                    <div className="flex flex-shrink-0">
                                        <button
                                            className="focus:outline-none inline-flex text-gray-700 hover:text-gray-900"
                                            onClick={() => {
                                                errorclose();
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <icons.close className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    );
}
