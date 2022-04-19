// Component
export default function LogoClouds() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    Empleadores Participantes
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
                    {companies.map((company) => (
                        <div className="col-span-1 flex justify-center bg-white py-8 px-8" key={company.image}>
                            <img
                                className="max-h-12"
                                src={`/images/companies/${company.image}.svg`}
                                alt={company.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const companies = [
    { name: "Chrysler", image: "chrysler" },
    { name: "MercadoLibre", image: "mercadoLibre" },
    { name: "Mercedes Benz", image: "mercedesBenz" },
    { name: "Volkswagen", image: "volkswagen" },
    { name: "Nissan", image: "nissan" },
    { name: "Toyota", image: "toyota" },
];
