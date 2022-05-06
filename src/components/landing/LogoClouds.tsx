// Component
export default function LogoClouds() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    Algunos de los Empleadores Participantes
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:mt-8">
                    {companies.map((company) => (
                        <div className="col-span-1 flex justify-center bg-white py-8 px-8" key={company.image}>
                            <img
                                className="object-fill"
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
    { name: "Vips", image: "vips" },
    { name: "Sanborns", image: "sanborns" },
    { name: "Pf Changs", image: "pf-changs-logo" },
    { name: "Sorteos Tec", image: "sorteostec" },
    { name: "Burger King", image: "buger-king" },
    { name: "Starbucks", image: "starbucks" },
];
