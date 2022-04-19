import { useState } from "react";
import Pagination from "./Pagination";

import SearchParams from "./SearchParams";
import SearchParamsMobile from "./SearchParamsMobile";

const jobs = [
    {
        id: 1,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 2,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 3,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 4,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 5,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 6,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 7,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 8,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 11,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 12,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 13,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 14,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 15,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 16,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 17,
        name: "Asistente Financiero",
        href: "/puestos/01-012-382-23",
        salary: "$10,000",
        company: "Banco Santander Rio México S.A.",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 18,
        name: "Evaluador de Proveedores",
        href: "/puestos/01-012-382-23",
        salary: "$12,000",
        company: "Nissan Financial Mexico SRL",
        type: "Medio Tiempo (4 hs)",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
];

const filters = [
    {
        id: "type",
        name: "Tipo de Trabajo",
        options: [
            { value: "fulltime", label: "Jornada Completa" },
            { value: "parttime", label: "Medio Tiempo" },
            { value: "remote", label: "Remoto" },
        ],
    },
    {
        id: "industry",
        name: "Industria",
        options: [
            { value: "manufacturing", label: "Manufactura" },
            { value: "agriculture", label: "Agricultura" },
            { value: "construction", label: "Construcción" },
            { value: "education", label: "Educación" },
        ],
    },
];

export default function Results() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <div>
            <div>
                <SearchParamsMobile
                    filters={filters}
                    mobileFiltersOpen={mobileFiltersOpen}
                    setMobileFiltersOpen={setMobileFiltersOpen}
                />
                <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
                    <div className="py-4 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
                        <SearchParams
                            filters={filters}
                            mobileFiltersOpen={mobileFiltersOpen}
                            setMobileFiltersOpen={setMobileFiltersOpen}
                        />
                        <section aria-labelledby="job-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                            <h2 id="job-heading" className="sr-only">
                                Puestos de Trabajo
                            </h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {jobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:border-green-500"
                                    >
                                        <div className="flex flex-1 flex-col p-3">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <a href={job.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {job.name}
                                                </a>
                                            </h3>
                                            <p className="text-sm text-gray-500">{job.company}</p>
                                            <div className="flex flex-1 flex-col justify-end">
                                                <p className="text-sm text-gray-800">{job.type}</p>
                                                <p className="text-base font-medium text-gray-900">{job.salary}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
