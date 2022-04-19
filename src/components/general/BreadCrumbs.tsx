import type { FC } from "react";
import Link from "next/link";
// Icon Imports
import { iconHome } from "../icons";

// Icons Object
const icons = {
    home: iconHome,
};

// Component
const BreadCrumbs: FC<{ breadcrumbs: { name: string; href: string; current: boolean }[] }> = ({ breadcrumbs }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto hidden max-w-7xl px-4 sm:block">
                <div className="border-t border-gray-200 py-3">
                    <nav className="flex" aria-label="Breadcrumb">
                        <div className="">
                            <ol className="flex items-center space-x-4">
                                <li>
                                    <div>
                                        <Link href="/" passHref>
                                            <div className="cursor-pointer text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Home</span>
                                                <icons.home className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                                {breadcrumbs.map((item) => (
                                    <li key={item.name}>
                                        <div className="flex items-center">
                                            <svg
                                                className="h-5 w-5 flex-shrink-0 text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                            </svg>
                                            {item.href !== "#" ? (
                                                <a href={item.href}>
                                                    <div
                                                        className="ml-4 cursor-pointer text-sm text-gray-500 hover:text-gray-700"
                                                        aria-current={item.current ? "page" : undefined}
                                                    >
                                                        {item.name}
                                                    </div>
                                                </a>
                                            ) : (
                                                <div>
                                                    <div
                                                        className="ml-4 text-sm text-gray-500"
                                                        aria-current={item.current ? "page" : undefined}
                                                    >
                                                        {item.name}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
