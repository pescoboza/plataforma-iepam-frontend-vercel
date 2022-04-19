import { FC, Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";

// Icon Imports
import { iconChevronDown, iconMenu, iconClose, iconPlus } from "@/components/icons";

import { classNames } from "@/helpers/classNames";

const icons = {
    chevronDown: iconChevronDown,
    menu: iconMenu,
    close: iconClose,
    plus: iconPlus,
};

// Component
const SearchParamsMobile: FC<{
    filters: {
        id: string;
        name: string;
        options: {
            label: string;
            value: string;
        }[];
    }[];
    mobileFiltersOpen: boolean;
    setMobileFiltersOpen: (v: boolean) => void;
}> = ({ filters, mobileFiltersOpen, setMobileFiltersOpen }) => {
    return (
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setMobileFiltersOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                            <button
                                type="button"
                                className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setMobileFiltersOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <icons.close className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4">
                            {filters.map((section) => (
                                <Disclosure as="div" key={section.name} className="border-t border-gray-200 pt-4 pb-4">
                                    {({ open }) => (
                                        <fieldset>
                                            <legend className="w-full px-2">
                                                <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {section.name}
                                                    </span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <icons.chevronDown
                                                            className={classNames(
                                                                open ? "-rotate-180" : "rotate-0",
                                                                "h-5 w-5 transform"
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </legend>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2">
                                                <div className="space-y-6">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`${section.id}-${optionIdx}-mobile`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                className="ml-3 text-sm text-gray-500"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </fieldset>
                                    )}
                                </Disclosure>
                            ))}
                        </form>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    );
};

export default SearchParamsMobile;
